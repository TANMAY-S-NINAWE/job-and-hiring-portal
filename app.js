
// ========================
// PAGE NAVIGATION
// ========================
function goPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const map = {main:'nav-main', employer:'nav-employer', candidate:'nav-candidate'};
  if (map[name]) document.getElementById(map[name]).classList.add('active');
  window.scrollTo(0,0);
}

// ========================
// JOB DATA
// ========================
const jobsData = [
  // ── SMALL / ENTRY-LEVEL JOBS ──────────────────────────────────────────
  { title:'Computer Operator', company:'Nagpur Municipal Corp.', logo:'NM', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹12,000–18,000/mo', exp:'Fresher / 0–1 yr', posted:'1h ago', desc:'Operate and maintain computer systems, enter data accurately, generate daily reports and assist office staff with basic IT tasks. MS Office proficiency required.', skills:['MS Office','Data Entry','Typing','Excel'], featured:false, badge:'new', category:'entry' },
  { title:'Sales Executive', company:'Reliance Retail', logo:'RR', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹15,000–22,000/mo', exp:'Fresher / 0–2 yrs', posted:'3h ago', desc:'Achieve monthly sales targets, handle customer queries on the shop floor, maintain product displays and process billing at the counter.', skills:['Communication','Sales','Customer Service','POS'], featured:false, badge:'new', category:'entry' },
  { title:'Marketing Executive', company:'Amul Distributor', logo:'AM', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹14,000–20,000/mo', exp:'Fresher / 0–1 yr', posted:'4h ago', desc:'Promote products in the local market, visit retail shops, collect orders, distribute pamphlets and assist in local marketing campaigns.', skills:['Field Marketing','Communication','MS Excel','Negotiation'], featured:false, badge:'new', category:'entry' },
  { title:'Data Entry Operator', company:'SBI Bank (Branch)', logo:'SB', loc:'Nagpur, MH', type:'Part-time', remote:false, salary:'₹10,000–14,000/mo', exp:'Fresher', posted:'2h ago', desc:'Enter customer details, process loan application forms, update records in the banking software and ensure document accuracy. 10th/12th pass eligible.', skills:['Fast Typing','Tally','Data Entry','Accuracy'], featured:false, badge:'new', category:'entry' },
  { title:'Telecaller / BPO Executive', company:'HDFC Life Insurance', logo:'HD', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹12,000–18,000/mo + incentive', exp:'Fresher / 0–1 yr', posted:'5h ago', desc:'Make outbound calls to prospective customers, explain insurance products, schedule follow-ups and update CRM records. Good Hindi/Marathi communication essential.', skills:['Communication','CRM','Hindi','Marathi'], featured:false, badge:'new', category:'entry' },
  { title:'Shop Floor Sales Associate', company:'D-Mart', logo:'DM', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹11,000–15,000/mo', exp:'Fresher', posted:'Today', desc:'Assist customers on the floor, stock shelves, handle billing counter, maintain cleanliness and ensure a pleasant shopping experience. 12th pass eligible.', skills:['Customer Service','Billing','Stocking','Communication'], featured:false, badge:'new', category:'entry' },
  { title:'Office Boy / Office Assistant', company:'Nutan Nagrik Co-op Bank', logo:'NN', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹9,000–12,000/mo', exp:'Fresher / 10th pass', posted:'6h ago', desc:'Assist with filing, document delivery, photocopying, tea/refreshments for staff and running errands within office premises. 10th pass can apply.', skills:['Filing','Errands','Basic Computer','Punctuality'], featured:false, badge:'', category:'entry' },
  { title:'Delivery Executive', company:'Zomato', logo:'ZO', loc:'Nagpur, MH', type:'Part-time', remote:false, salary:'₹18,000–30,000/mo', exp:'Fresher (own bike)', posted:'30m ago', desc:'Pick up food orders from restaurants and deliver to customers on time using the Zomato app. Flexible shifts available. Bike and smartphone required.', skills:['Driving','Navigation','App Usage','Time Mgmt'], featured:false, badge:'new', category:'entry' },
  { title:'Receptionist / Front Desk', company:'City Pride Hotel', logo:'CP', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹13,000–18,000/mo', exp:'0–2 yrs', posted:'1d ago', desc:'Greet guests, handle check-in/check-out, answer phone calls, manage reservations and provide hotel information. Presentable appearance required.', skills:['Communication','MS Office','Customer Handling','English'], featured:false, badge:'', category:'entry' },
  { title:'Digital Marketing Intern', company:'LocalAds Agency', logo:'LA', loc:'Nagpur, MH', type:'Internship', remote:true, salary:'₹8,000–12,000/mo (Stipend)', exp:'Fresher / Student', posted:'8h ago', desc:'Assist in running Facebook & Instagram ad campaigns, write social media captions, track analytics and support the content team. Perfect for freshers.', skills:['Social Media','Canva','Meta Ads','Content Writing'], featured:false, badge:'new', category:'entry' },
  { title:'Peon / Multi-Tasking Staff', company:'Nagpur District Court', logo:'ND', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹8,500–11,000/mo', exp:'No experience needed', posted:'2d ago', desc:'Government vacancy for MTS/Peon role. Responsibilities include file delivery, cleaning duties and assisting officers. 8th/10th pass eligible to apply.', skills:['Physical Fitness','Reliability','Communication','Discipline'], featured:false, badge:'', category:'entry' },
  { title:'Security Guard', company:'G4S Security Solutions', logo:'G4', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹10,000–14,000/mo', exp:'Fresher / Ex-serviceman preferred', posted:'3d ago', desc:'Monitor premises, control entry/exit, maintain visitor logs and ensure safety of the facility. Uniform and training provided. Ex-military candidates preferred.', skills:['Vigilance','Physical Fitness','Communication','Reporting'], featured:false, badge:'', category:'entry' },
  { title:'Tally Accountant', company:'Sharma & Sons Trading Co.', logo:'ST', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹14,000–20,000/mo', exp:'0–2 yrs', posted:'1d ago', desc:'Maintain day-to-day accounts using Tally ERP, prepare GST returns, manage invoices, bank reconciliation and assist CA during audit season.', skills:['Tally ERP','GST','Bookkeeping','MS Excel'], featured:false, badge:'new', category:'entry' },
  { title:'Field Sales Representative', company:'Bajaj Finserv', logo:'BJ', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹15,000–25,000/mo + incentive', exp:'Fresher / 0–2 yrs', posted:'Today', desc:'Visit clients, explain personal loan & EMI card products, collect documents and onboard new customers. High incentive structure for achievers.', skills:['Sales','Negotiation','Documentation','Target Achievement'], featured:false, badge:'new', category:'entry' },
  { title:'Warehouse / Store Helper', company:'Amazon Fulfillment Center', logo:'AZ', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹12,000–16,000/mo', exp:'Fresher / No experience', posted:'Today', desc:'Pick, pack and sort orders in the warehouse. Operate barcode scanners, maintain inventory records and ensure timely dispatch. Multiple shifts available.', skills:['Inventory','Barcode Scanner','Physical Work','Teamwork'], featured:false, badge:'new', category:'entry' },

  // ── PROFESSIONAL / SENIOR JOBS ───────────────────────────────────────
  { title:'Senior Software Engineer', company:'Infosys', logo:'IN', loc:'Nagpur, MH', type:'Full-time', remote:true, salary:'₹18–28 LPA', exp:'5–8 yrs', posted:'2h ago', desc:'We are looking for a Senior SWE with strong experience in Java, Spring Boot and microservices architecture to join our enterprise solutions team.', skills:['Java','Spring Boot','Microservices','AWS'], featured:true, badge:'featured', category:'pro' },
  { title:'Data Scientist', company:'TCS', logo:'TC', loc:'Pune, MH', type:'Full-time', remote:false, salary:'₹14–22 LPA', exp:'3–5 yrs', posted:'5h ago', desc:'Join our analytics team to build ML models and data pipelines for Fortune 500 clients. Strong Python and statistics background required.', skills:['Python','TensorFlow','SQL','Spark'], featured:false, badge:'new', category:'pro' },
  { title:'React Frontend Developer', company:'Wipro Digital', logo:'WD', loc:'Nagpur, MH', type:'Full-time', remote:true, salary:'₹10–18 LPA', exp:'2–4 yrs', posted:'1d ago', desc:'Build high-performance web applications using React and TypeScript. Work closely with design and backend teams in an agile environment.', skills:['React','TypeScript','Tailwind','REST API'], featured:false, badge:'', category:'pro' },
  { title:'Product Manager', company:'Razorpay', logo:'RZ', loc:'Bengaluru, KA', type:'Full-time', remote:false, salary:'₹25–40 LPA', exp:'5–8 yrs', posted:'3d ago', desc:'Own the roadmap for our B2B payments product. Work with engineering, design, and sales to define and ship impactful features.', skills:['Product Strategy','Agile','SQL','User Research'], featured:true, badge:'featured', category:'pro' },
  { title:'UX Designer', company:'Swiggy', logo:'SW', loc:'Mumbai, MH', type:'Full-time', remote:true, salary:'₹12–20 LPA', exp:'3–6 yrs', posted:'1d ago', desc:'Design intuitive experiences for millions of users. Create wireframes, conduct user research, and work with product and engineering.', skills:['Figma','User Research','Prototyping','Design Systems'], featured:false, badge:'new', category:'pro' },
  { title:'DevOps Engineer', company:'HCL Technologies', logo:'HC', loc:'Nagpur, MH', type:'Full-time', remote:false, salary:'₹12–22 LPA', exp:'3–5 yrs', posted:'2d ago', desc:'Manage CI/CD pipelines, Kubernetes clusters, and cloud infrastructure. Drive automation and reliability improvements across our platform.', skills:['Kubernetes','Docker','AWS','Terraform'], featured:false, badge:'', category:'pro' },
  { title:'Android Developer', company:'Paytm', logo:'PT', loc:'Noida, UP', type:'Full-time', remote:false, salary:'₹15–25 LPA', exp:'3–6 yrs', posted:'6h ago', desc:'Build features for India\'s most downloaded payments app. Work on performance, security, and seamless user experiences on Android.', skills:['Kotlin','Android SDK','MVVM','Retrofit'], featured:false, badge:'new', category:'pro' },
  { title:'Cloud Solutions Architect', company:'AWS India', logo:'AW', loc:'Hyderabad, TS', type:'Full-time', remote:true, salary:'₹30–55 LPA', exp:'8+ yrs', posted:'3d ago', desc:'Design and implement highly available, fault-tolerant AWS architectures. Provide technical leadership to enterprise customers through their cloud journey.', skills:['AWS','Architecture','Security','Cost Optimization'], featured:true, badge:'featured', category:'pro' },
];

const logoColors = ['#1a56db','#7c3aed','#0891b2','#059669','#dc2626','#d97706','#0f766e','#9333ea','#1d4ed8','#047857'];

function renderJobs(jobs) {
  const grid = document.getElementById('jobs-grid');
  grid.innerHTML = jobs.map((j, i) => `
    <div class="job-card ${j.badge==='featured'?'featured':''}" onclick="">
      ${j.badge==='featured' ? '<div class="badge-featured">⭐ Featured</div>' : j.badge==='new' && j.category==='entry' ? '<div class="badge-entry">🟡 Entry Level</div>' : j.badge==='new' ? '<div class="badge-new">🟢 New</div>' : ''}
      <div class="job-card-top">
        <div class="company-logo" style="background:${logoColors[i%logoColors.length]}22;color:${logoColors[i%logoColors.length]}">${j.logo}</div>
        <div class="job-info">
          <h3>${j.title}</h3>
          <div class="company">${j.company}</div>
        </div>
      </div>
      <div class="job-meta">
        <div class="meta-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${j.loc}</div>
        <div class="meta-tag blue">${j.type}</div>
        ${j.remote ? '<div class="meta-tag green">🌐 Remote OK</div>' : ''}
        <div class="meta-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${j.exp}</div>
        <div class="meta-tag amber">🕐 ${j.posted}</div>
      </div>
      <p class="job-desc">${j.desc}</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">
        ${j.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}
      </div>
      <div class="job-footer">
        <div class="salary">${j.salary}</div>
        <div class="job-actions">
          <button class="btn btn-save btn-sm" onclick="event.stopPropagation();toggleSave(this)">🔖 Save</button>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();showToast('Applied to ${j.title} at ${j.company}! ✅')">Apply Now</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterTab(btn, cat) {
  btn.parentElement.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if (cat === 'all') { renderJobs(jobsData); document.getElementById('results-title').textContent = 'All Jobs in India'; return; }
  if (cat === 'entry') { renderJobs(jobsData.filter(j=>j.category==='entry')); document.getElementById('results-title').textContent = 'Entry Level & Small Jobs'; return; }
  if (cat === 'fresher') { renderJobs(jobsData.filter(j=>j.exp && j.exp.toLowerCase().includes('fresher'))); document.getElementById('results-title').textContent = 'Fresher Jobs'; return; }
  if (cat === 'remote') { renderJobs(jobsData.filter(j=>j.remote)); document.getElementById('results-title').textContent = 'Remote Jobs'; return; }
  if (cat === 'govt') { renderJobs(jobsData.filter(j=>j.company && (j.company.includes('Corp')||j.company.includes('Court')||j.company.includes('District')||j.company.includes('Municipal')))); document.getElementById('results-title').textContent = 'Government / PSU Jobs'; return; }
  if (cat === 'urgent') { renderJobs(jobsData.filter(j=>j.posted && (j.posted.includes('h ago')||j.posted.includes('Today')||j.posted.includes('m ago')))); document.getElementById('results-title').textContent = 'Urgently Hiring'; return; }
}

renderJobs(jobsData);

// ========================
// SEARCH SUGGESTIONS
// ========================
const jobSuggestions = [
  // entry-level / small jobs
  'Computer Operator','Data Entry Operator','Telecaller','BPO Executive',
  'Sales Executive','Marketing Executive','Field Sales Representative',
  'Shop Floor Sales Associate','Office Assistant','Office Boy','Peon',
  'Delivery Executive','Security Guard','Receptionist','Front Desk',
  'Tally Accountant','Warehouse Helper','Store Helper','Digital Marketing Intern',
  'Multi-Tasking Staff','Government Peon','Helper','Billing Clerk',
  'Bank Clerk','Typist','Back Office Executive','Customer Care Executive',
  'Cashier','Retail Associate','Sales Coordinator','Showroom Executive',
  // professional jobs
  'Software Engineer','Senior Developer','Data Scientist','Product Manager',
  'UX Designer','DevOps Engineer','Business Analyst','Marketing Manager',
  'Full Stack Developer','Android Developer','iOS Developer','Cloud Architect',
  'Machine Learning Engineer','Cybersecurity Analyst','React Developer',
  'HR Business Partner','Content Writer','Finance Analyst',
  'Python Developer','Java Developer','Node.js Developer','QA Engineer',
  'Project Manager','Scrum Master','Operations Manager','Graphic Designer'
];

const citySuggestions = [
  {name:'Nagpur, Maharashtra', icon:'📍'},
  {name:'Mumbai, Maharashtra', icon:'📍'},
  {name:'Pune, Maharashtra', icon:'📍'},
  {name:'Bengaluru, Karnataka', icon:'📍'},
  {name:'Hyderabad, Telangana', icon:'📍'},
  {name:'Chennai, Tamil Nadu', icon:'📍'},
  {name:'Delhi NCR', icon:'📍'},
  {name:'Kolkata, West Bengal', icon:'📍'},
  {name:'Ahmedabad, Gujarat', icon:'📍'},
  {name:'Jaipur, Rajasthan', icon:'📍'},
  {name:'Indore, Madhya Pradesh', icon:'📍'},
  {name:'Chandigarh', icon:'📍'},
  {name:'Noida, Uttar Pradesh', icon:'📍'},
  {name:'Gurgaon, Haryana', icon:'📍'},
  {name:'Coimbatore, Tamil Nadu', icon:'📍'},
  {name:'Nagpur (Within 25 km)', icon:'📍'},
  {name:'Remote / Work from Home', icon:'🌐'}
];

function showJobSuggestions(val) {
  const el = document.getElementById('job-sugg');
  if (!val.trim()) {
    el.innerHTML = `
      <div class="suggestion-group-label">Popular Searches</div>
      ${['Software Engineer','Data Scientist','Product Manager','UI/UX Designer','DevOps Engineer','Marketing Manager'].map(s=>`
        <div class="suggestion-item" onclick="pickJobSugg('${s}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          ${s}
        </div>`).join('')}
    `;
    el.classList.add('show');
    return;
  }
  const filtered = jobSuggestions.filter(s => s.toLowerCase().includes(val.toLowerCase())).slice(0,8);
  if (!filtered.length) { el.classList.remove('show'); return; }
  el.innerHTML = filtered.map(s => `
    <div class="suggestion-item" onclick="pickJobSugg('${s}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      ${s}
    </div>`).join('');
  el.classList.add('show');
}

function showCitySuggestions(val) {
  const el = document.getElementById('city-sugg');
  const list = !val.trim() ? citySuggestions : citySuggestions.filter(c => c.name.toLowerCase().includes(val.toLowerCase()));
  if (!list.length) { el.classList.remove('show'); return; }
  el.innerHTML = list.slice(0,8).map(c => `
    <div class="suggestion-item" onclick="pickCitySugg('${c.name}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      ${c.name}
    </div>`).join('');
  el.classList.add('show');
}

function pickJobSugg(val) {
  document.getElementById('job-search').value = val;
  hideSuggestions('job-sugg');
}
function pickCitySugg(val) {
  document.getElementById('city-search').value = val;
  hideSuggestions('city-sugg');
}
function hideSuggestions(id) { document.getElementById(id).classList.remove('show'); }

function searchJobs() {
  const job = document.getElementById('job-search').value;
  const city = document.getElementById('city-search').value;
  const title = (job || 'All Jobs') + (city ? ' in ' + city : ' in India');
  document.getElementById('results-title').textContent = title;
  hideSuggestions('job-sugg'); hideSuggestions('city-sugg');
  showToast('Showing results for: ' + title);
}

function quickSearch(term) {
  document.getElementById('job-search').value = term;
  searchJobs();
}

// ========================
// UI HELPERS
// ========================
function togglePill(el) { el.classList.toggle('active'); }
function toggleRole(el) { el.parentElement.querySelectorAll('.role-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); }
function toggleSave(btn) { btn.classList.toggle('saved'); btn.textContent = btn.classList.contains('saved') ? '🔖 Saved' : '🔖 Save'; showToast(btn.classList.contains('saved') ? 'Job saved!' : 'Job removed from saved'); }
function setRegRole(r) {
  document.getElementById('reg-seeker').classList.toggle('active', r==='seeker');
  document.getElementById('reg-employer').classList.toggle('active', r==='employer');
  document.getElementById('employer-extra').style.display = r==='employer'?'block':'none';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
  });
});
