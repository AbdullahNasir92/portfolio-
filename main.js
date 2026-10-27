/* ===== Edit your content here ===== */
const EMAIL = "malikabdullahnasir786@gmail.com"; // shown in Contact; change or clear to update

const SK = [
 ["Generative and agentic AI", ["LLM applications","prompt engineering","LangChain","ReAct agents","single- and multi-agent workflows","tool calling and API integration","RAG","knowledge-based Q&amp;A"]],
 ["Python and apps", ["Python","Jupyter Notebook","Google Colab","Streamlit","data processing","external API integration"]],
 ["Machine learning and NLP", ["Scikit-learn","text extraction and preprocessing","TF-IDF","Gradient Boosting","classification","model evaluation","resume analysis"]],
 ["Image and language generation", ["PyTorch","Hugging Face Transformers","Hugging Face Diffusers","text-to-text pipelines","text-to-image workflows"]],
 ["Retrieval and integrations", ["Pinecone vector database","semantic retrieval","Tavily web search","Weatherstack API"]],
 ["Digital marketing", ["social media management","content planning","Instagram and Facebook","short-form video editing","lead generation","basic SEO","campaign support"]],
 ["Customer and business", ["chat and call support","issue resolution and escalation","sales support","client communication","lead follow-up","HR coordination"]],
 ["Tools", ["Git","GitHub","Canva","Adobe Premiere Pro"]]
];

// [organization, role, period ("" shows a placeholder), highlights]
const EX = [
 ["ISPR","Internship","ended September 2026",["Exposure to operations in a structured training environment."]],
 ["Mindbridge","Chat Support","June 2025 – December 2025",["Handled customer conversations over chat and responded professionally.","Followed support procedures and escalated issues when needed.","Worked in a rotational-shift environment."]],
 ["EWG","Customer Support, Social Media and HR","August 2024 – March 2025",["Call-center and customer communication.","Social media account management and content activities.","HR-related coordination and administrative work."]],
 ["Al Hijaz Travels","Social Media Manager and Video Editor","March 10 – July 28, 2024",["Managed social media content and account activity.","Edited video content for digital channels.","Supported the online visibility of travel services."]],
 ["Mega Estate","Sales and Marketing Executive","September 2023 – February 2024",["Promoted real estate listings through field marketing.","Handled inquiries from prospective clients and followed up on leads.","Coordinated with the media team on marketing activities."]],
 ["Alpha Tech","Call Center Agent","",["Customer communication and service-related responsibilities."]]
];

// [title, category, description, technologies, GitHub URL, optional note]
const PJ = [
 ["Multi-Agent Research System","Agentic AI, research automation","Four specialized agents (Search, Read, Write and Critic) work together to find sources, process them, draft structured research content and review it. A Streamlit interface collects interactive feedback.","Python, LangChain, GPT-4o-mini, Streamlit, web search tools","https://github.com/AbdullahNasir92/Multi-Agent-Research-System-Using-LangChain-",""],
 ["Single AI Agent with LangChain","Agentic AI, tool use","A ReAct-style agent that reasons through a task, calls tools for web search and weather, and adapts its answer to what the tools return.","Python, LangChain, GPT-3.5-Turbo, Tavily, Weatherstack API","https://github.com/AbdullahNasir92/Single-Agent-Using-LangChain",""],
 ["AI Resume Analyzer","Machine learning, NLP","Extracts and preprocesses resume text, applies TF-IDF vectorization, flags skill gaps and uses a Gradient Boosting model to predict a job-compatibility score.","Python, NLP, TF-IDF, Scikit-learn, Gradient Boosting","https://github.com/AbdullahNasir92/Resume-Analyzer-Model","Reported in the repository: R² of 0.8599 and an 81.32% ATS-match score. These are project-reported figures, not validated hiring accuracy."],
 ["Heart Disease Classification","Machine learning, healthcare data","Preprocesses patient data and trains a five-class model, then evaluates it with probability analysis, confusion matrices and classification reports.","Python, Scikit-learn, Jupyter Notebook, Google Colab","https://github.com/AbdullahNasir92/heart-disease-pridiction-model","An educational project, not a clinically validated diagnostic tool."],
 ["Text-to-Image Generation","Generative AI, deep learning","A pipeline that turns text prompts into images, including landscapes, using pretrained diffusion components.","Python, PyTorch, Hugging Face Diffusers, Transformers, Google Colab","https://github.com/AbdullahNasir92/Text-To-Image",""],
 ["Text-to-Text AI Pipeline","Generative AI, NLP","Experiments with prompts, language-model outputs and output evaluation in a text-to-text workflow.","Python, Google Colab, LLM workflows, prompt engineering","https://github.com/AbdullahNasir92/Text-To-Text-",""]
];

// [title, issuer, status]
const CE = [
 ["Agentic AI Course","Bano Qabil","Completed"],
 ["Social Media Marketing","Punjab Government program",""]
];

/* ===== Rendering ===== */
const $ = s => document.querySelector(s);
const put = (s, html) => { $(s).innerHTML = html; };
put("#sk", SK.map(([g,l]) => `<div class="rw"><dt>${g}</dt><dd>${l.join(", ")}</dd></div>`).join(""));
put("#ex", EX.map(([o,r,p,b]) => `<article><h3>${o}</h3><p class="pd">${r}, ${p || '<span class="td">dates to add</span>'}</p><ul>${b.map(x => `<li>${x}</li>`).join("")}</ul></article>`).join(""));
put("#pj", PJ.map(([t,c,d,k,u,n]) => `<article class="pj"><div><h3>${t}</h3><p class="cat">${c}</p></div><div><p>${d}</p><p class="tc">${k}</p>${n ? `<p class="nt">${n}</p>` : ""}<a class="lk" href="${u}" target="_blank" rel="noopener">View repository on GitHub</a></div></article>`).join(""));
put("#ce", CE.map(([t,i,s]) => `<div class="rw"><dt>${t}</dt><dd>${i}${s ? ", " + s.toLowerCase() : ""}</dd></div>`).join(""));
if (EMAIL) $("#ct").insertAdjacentHTML("beforeend", `<a href="mailto:${EMAIL}"><small>Email</small>${EMAIL}</a>`);
$("#yr").textContent = new Date().getFullYear();

/* ===== Theme ===== */
const R = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) R.dataset.theme = t; } catch (e) {}
$("#tg").onclick = () => {
 const t = R.dataset.theme === "dark" ? "light" : "dark";
 R.dataset.theme = t;
 try { localStorage.setItem("theme", t); } catch (e) {}
};

/* ===== Navigation ===== */
const nav = $("#nav"), mb = $("#mb");
mb.onclick = () => { const o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o); };
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
 const el = $(a.getAttribute("href"));
 if (!el) return;
 e.preventDefault();
 el.scrollIntoView({ behavior: "smooth" });
 nav.classList.remove("open"); mb.setAttribute("aria-expanded", false);
}));
const links = [...nav.querySelectorAll("a")];
const io = new IntersectionObserver(es => es.forEach(en => {
 if (en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(s => io.observe(s));

/* ===== Role typing ===== */
const W = ["AI Engineer","Generative AI","Agentic AI","Digital Marketing"], role = $("#role");
if (matchMedia("(prefers-reduced-motion: reduce)").matches) role.textContent = W.join(" | ");
else {
 let wi = 0, ci = 0, del = false;
 (function tick() {
  const w = W[wi]; ci += del ? -1 : 1; role.textContent = w.slice(0, ci);
  let d = del ? 40 : 85;
  if (!del && ci === w.length) { del = true; d = 1500; }
  else if (del && ci === 0) { del = false; wi = (wi + 1) % W.length; d = 300; }
  setTimeout(tick, d);
 })();
}
