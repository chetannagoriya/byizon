const featureBenefits = [
  "Save time with AI",
  "Reduce manual work",
  "Real-time insights",
  "Enterprise-ready security",
];

const features = {
  "dashboard-generator": {
    title: "AI Dashboard Generator",
    description: "Create interactive dashboards instantly from natural language commands.",
  },
  "dynamic-ui": {
    title: "Dynamic UI Generator",
    description: "AI builds dashboards, forms, tables, and screens in real time.",
  },
  "workflow-builder": {
    title: "AI Workflow Builder",
    description: "Generate approval flows and business processes without coding.",
  },
  "business-analyst": {
    title: "AI Business Analyst",
    description: "Ask business questions and receive actionable insights.",
  },
  "data-scientist": {
    title: "AI Data Scientist",
    description: "Automatic EDA, predictive analytics, forecasting, and ML-ready reports.",
  },
  automation: {
    title: "Business Automation",
    description: "Automate repetitive tasks across departments.",
  },
  "multi-agent-ai": {
    title: "Multi-Agent AI",
    description: "Specialized AI agents collaborate on complex business operations.",
  },
  "enterprise-search": {
    title: "Enterprise Search",
    description: "Search documents, reports, customers, invoices, and projects instantly.",
  },
  "business-memory": {
    title: "Business Memory",
    description: "AI remembers company context, workflows, and historical conversations.",
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    description: "Forecast revenue, sales, inventory, and business performance.",
  },
  reports: {
    title: "Report Generator",
    description: "Export executive-ready PDF, Excel, and presentation reports.",
  },
  "enterprise-integrations": {
    title: "Enterprise Integrations",
    description: "Connect CRM, ERP, HRMS, databases, APIs, Slack, Teams, and more.",
  },
  forms: {
    title: "Forms",
    description: "AI builds business forms that connect to dashboards, workflows, tables, and enterprise data.",
  },
};

const featureOrder = [
  "dashboard-generator",
  "dynamic-ui",
  "workflow-builder",
  "business-analyst",
  "data-scientist",
  "automation",
  "multi-agent-ai",
  "enterprise-search",
  "business-memory",
  "predictive-analytics",
  "reports",
  "enterprise-integrations",
  "forms",
];

const params = new URLSearchParams(window.location.search);
const requestedFeature = params.get("feature") || "dashboard-generator";
const activeKey = features[requestedFeature] ? requestedFeature : "dashboard-generator";
const activeFeature = features[activeKey];

const title = document.querySelector("#feature-title");
const sideTitle = document.querySelector("#side-title");
const description = document.querySelector("#feature-description");
const benefits = document.querySelector("#feature-benefits");
const linkGrid = document.querySelector("#feature-link-grid");

document.title = `Byizon - ${activeFeature.title}`;
title.textContent = activeFeature.title;
sideTitle.textContent = activeFeature.title;
description.textContent = activeFeature.description;

benefits.innerHTML = featureBenefits.map((benefit) => `<li>${benefit}</li>`).join("");

linkGrid.innerHTML = featureOrder
  .map((key) => {
    const feature = features[key];
    const activeClass = key === activeKey ? " is-active" : "";
    return `
      <a class="feature-link-card${activeClass}" href="feature.html?feature=${key}">
        <span>${feature.title}</span>
        <p>${feature.description}</p>
      </a>
    `;
  })
  .join("");
