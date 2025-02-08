const quizContainer = document.getElementById('quiz');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const feedbackContainer = document.getElementById('feedback');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What are the key components of a PESTLE analysis?",
    options: ["Political, Economic, Social, Technological, Legal, Environmental", "People, Environment, Systems, Technology, Legal, Economic", "Planning, Execution, Strategy, Technology, Legal, Environment"],
    answer: "Political, Economic, Social, Technological, Legal, Environmental",
    explanation: "PESTLE analysis evaluates external factors affecting a business."
  },
  {
    question: "Define 'stakeholder'.",
    options: ["A person who invests in a company", "A person or group with an interest in the success of a business", "A government regulator"],
    answer: "A person or group with an interest in the success of a business",
    explanation: "Stakeholders can be internal (employees, managers) or external (customers, suppliers)."
  },
  {
    question: "List 3 examples of internal stakeholders.",
    options: ["Employees, Managers, Shareholders", "Customers, Suppliers, Government", "Competitors, Media, Community"],
    answer: "Employees, Managers, Shareholders",
    explanation: "Internal stakeholders are individuals or groups within the organization."
  },
  {
    question: "What is 'globalisation'?",
    options: ["The process of localising business operations", "The integration of economies and societies worldwide", "A strategy to reduce international trade"],
    answer: "The integration of economies and societies worldwide",
    explanation: "Globalisation allows businesses to operate on an international scale."
  },
  {
    question: "How does globalisation impact businesses?",
    options: ["Increases competition and market opportunities", "Reduces access to technology", "Limits cultural exchange"],
    answer: "Increases competition and market opportunities",
    explanation: "Globalisation opens up new markets and increases competition."
  },
  {
    question: "How can businesses mitigate technological disruption risks?",
    options: ["By ignoring new technologies", "By investing in innovation and training", "By reducing employee numbers"],
    answer: "By investing in innovation and training",
    explanation: "Adapting to technological changes helps businesses stay competitive."
  },
  {
    question: "What is a 'monopoly' market structure?",
    options: ["A market with many sellers", "A market dominated by a single seller", "A market with no competition"],
    answer: "A market dominated by a single seller",
    explanation: "A monopoly has no competition and controls the market."
  },
  {
    question: "What is an 'oligopoly' market structure?",
    options: ["A market with many small sellers", "A market dominated by a few large sellers", "A market with no government regulation"],
    answer: "A market dominated by a few large sellers",
    explanation: "An oligopoly is characterized by a few dominant firms."
  },
  {
    question: "Explain the difference between a 'monopoly' and 'oligopoly'.",
    options: ["Monopoly has one seller; oligopoly has a few sellers", "Monopoly has no competition; oligopoly has perfect competition", "Monopoly is illegal; oligopoly is legal"],
    answer: "Monopoly has one seller; oligopoly has a few sellers",
    explanation: "A monopoly has no competition, while an oligopoly has limited competition."
  },
  {
    question: "What is the role of competition in a market?",
    options: ["To reduce innovation", "To increase prices", "To improve quality and efficiency"],
    answer: "To improve quality and efficiency",
    explanation: "Competition drives businesses to innovate and improve."
  },
  {
    question: "What is 'corporate social responsibility' (CSR)?",
    options: ["A company's obligation to maximize profits", "A company's commitment to ethical practices and societal well-being", "A government policy for businesses"],
    answer: "A company's commitment to ethical practices and societal well-being",
    explanation: "CSR involves businesses contributing positively to society."
  },
  {
    question: "Define 'business ethics'.",
    options: ["The study of business profits", "The moral principles guiding business behavior", "A legal requirement for businesses"],
    answer: "The moral principles guiding business behavior",
    explanation: "Business ethics ensure fair and responsible practices."
  },
  {
    question: "What is a 'business cycle'?",
    options: ["The process of hiring employees", "The fluctuations in economic activity over time", "The lifecycle of a product"],
    answer: "The fluctuations in economic activity over time",
    explanation: "The business cycle includes periods of growth and recession."
  },
  {
    question: "Explain 'supply chain management'.",
    options: ["Managing employee relationships", "Managing the flow of goods and services from production to consumption", "Managing financial investments"],
    answer: "Managing the flow of goods and services from production to consumption",
    explanation: "Supply chain management ensures efficient delivery of products."
  },
  {
    question: "What is the role of technology in business?",
    options: ["To reduce efficiency", "To improve productivity and innovation", "To limit market reach"],
    answer: "To improve productivity and innovation",
    explanation: "Technology enhances business operations and competitiveness."
  },
  {
    question: "Define 'e-commerce'.",
    options: ["The process of selling goods in physical stores", "The buying and selling of goods and services online", "A type of business partnership"],
    answer: "The buying and selling of goods and services online",
    explanation: "E-commerce allows businesses to reach global markets."
  },
  {
    question: "What are the benefits of e-commerce?",
    options: ["Limited market reach", "Increased convenience and global reach", "Higher operational costs"],
    answer: "Increased convenience and global reach",
    explanation: "E-commerce provides 24/7 access to customers worldwide."
  },
  {
    question: "Explain the concept of 'customer relationship management' (CRM).",
    options: ["Managing employee relationships", "Managing interactions with current and potential customers", "Managing financial records"],
    answer: "Managing interactions with current and potential customers",
    explanation: "CRM helps businesses build and maintain customer relationships."
  },
  {
    question: "What is 'market segmentation'?",
    options: ["Dividing a market into distinct groups of buyers", "Combining all markets into one", "A strategy to reduce competition"],
    answer: "Dividing a market into distinct groups of buyers",
    explanation: "Market segmentation allows targeted marketing strategies."
  },
  {
    question: "Define 'business sustainability'.",
    options: ["A focus on short-term profits", "Operating in a way that meets current needs without compromising future generations", "A government policy for businesses"],
    answer: "Operating in a way that meets current needs without compromising future generations",
    explanation: "Sustainability ensures long-term business success."
  },

  {
    question: "What are the key functions of management according to 'POLC'?",
    options: ["Planning, Organizing, Leading, Controlling", "Producing, Operating, Leading, Controlling", "Planning, Operating, Leading, Communicating"],
    answer: "Planning, Organizing, Leading, Controlling",
    explanation: "POLC represents the core functions of management."
  },
  {
    question: "What does 'POLC' stand for in management?",
    options: ["Planning, Organizing, Leading, Controlling", "Producing, Operating, Leading, Controlling", "Planning, Operating, Leading, Communicating"],
    answer: "Planning, Organizing, Leading, Controlling",
    explanation: "POLC is a framework for effective management."
  },
  {
    question: "What is the role of a 'middle manager'?",
    options: ["To oversee top-level executives", "To implement strategies set by top management", "To manage entry-level employees only"],
    answer: "To implement strategies set by top management",
    explanation: "Middle managers bridge the gap between top management and employees."
  },
  {
    question: "Explain the concept of 'span of control'.",
    options: ["The number of employees a manager can effectively supervise", "The total number of employees in a company", "The hierarchy levels in an organization"],
    answer: "The number of employees a manager can effectively supervise",
    explanation: "A wider span of control means more employees per manager."
  },
  {
    question: "Differentiate between 'autocratic' and 'democratic' leadership styles.",
    options: ["Autocratic leaders make decisions alone; democratic leaders involve employees", "Autocratic leaders are passive; democratic leaders are strict", "Autocratic leaders focus on teamwork; democratic leaders focus on individual performance"],
    answer: "Autocratic leaders make decisions alone; democratic leaders involve employees",
    explanation: "Autocratic leadership is directive, while democratic leadership is participative."
  },
  {
    question: "How can effective communication improve motivation?",
    options: ["By creating confusion", "By ensuring clarity and alignment with goals", "By reducing employee interaction"],
    answer: "By ensuring clarity and alignment with goals",
    explanation: "Clear communication fosters employee engagement and motivation."
  },
  {
    question: "What is the function of planning in management?",
    options: ["To set goals and determine actions to achieve them", "To monitor employee performance", "To organize resources"],
    answer: "To set goals and determine actions to achieve them",
    explanation: "Planning provides direction for the organization."
  },
  {
    question: "What is the function of organizing in management?",
    options: ["To set goals", "To arrange resources and tasks to achieve objectives", "To monitor performance"],
    answer: "To arrange resources and tasks to achieve objectives",
    explanation: "Organizing ensures resources are used efficiently."
  },
  {
    question: "What is the function of leading in management?",
    options: ["To control resources", "To inspire and guide employees towards goals", "To organize tasks"],
    answer: "To inspire and guide employees towards goals",
    explanation: "Leading involves motivating and influencing employees."
  },
  {
    question: "What is the function of controlling in management?",
    options: ["To monitor progress and ensure goals are met", "To organize resources", "To set goals"],
    answer: "To monitor progress and ensure goals are met",
    explanation: "Controlling ensures performance aligns with objectives."
  },
  {
    question: "What is 'change management'?",
    options: ["Managing employee salaries", "Managing the transition of individuals and organizations to a desired future state", "Managing product development"],
    answer: "Managing the transition of individuals and organizations to a desired future state",
    explanation: "Change management helps organizations adapt to new challenges."
  },
  {
    question: "Define 'business negotiation'.",
    options: ["A process of resolving conflicts between employees", "A discussion aimed at reaching an agreement", "A method of financial planning"],
    answer: "A discussion aimed at reaching an agreement",
    explanation: "Negotiation is essential for resolving disputes and making deals."
  },
  {
    question: "What is 'teamwork' in a business context?",
    options: ["Working independently to achieve goals", "Collaborating with others to achieve common objectives", "Managing resources alone"],
    answer: "Collaborating with others to achieve common objectives",
    explanation: "Teamwork enhances productivity and innovation."
  },
  {
    question: "Explain the importance of 'networking' in business.",
    options: ["To reduce opportunities", "To build relationships and create opportunities", "To limit market reach"],
    answer: "To build relationships and create opportunities",
    explanation: "Networking helps businesses grow and access resources."
  },
  {
    question: "What is 'business continuity planning'?",
    options: ["Planning for employee vacations", "Ensuring operations continue during and after a disruption", "Planning for product launches"],
    answer: "Ensuring operations continue during and after a disruption",
    explanation: "Business continuity planning minimizes downtime during crises."
  },
  {
    question: "Define 'franchise'.",
    options: ["A type of business partnership", "A legal agreement to operate under an established brand", "A government policy for businesses"],
    answer: "A legal agreement to operate under an established brand",
    explanation: "Franchising allows businesses to expand using a proven model."
  },
  {
    question: "What is a 'joint venture'?",
    options: ["A business owned by one individual", "A partnership between two or more businesses for a specific project", "A government-owned business"],
    answer: "A partnership between two or more businesses for a specific project",
    explanation: "Joint ventures allow businesses to share resources and risks."
  },
  {
    question: "Explain 'corporate culture'.",
    options: ["The financial performance of a company", "The shared values, beliefs, and practices within an organization", "The legal structure of a business"],
    answer: "The shared values, beliefs, and practices within an organization",
    explanation: "Corporate culture influences employee behavior and performance."
  },
  {
    question: "What is 'strategic alliance'?",
    options: ["A merger between two companies", "A partnership between businesses to achieve mutual goals", "A government policy for businesses"],
    answer: "A partnership between businesses to achieve mutual goals",
    explanation: "Strategic alliances allow businesses to leverage each other's strengths."
  },
  {
    question: "Define 'venture capital'.",
    options: ["Funding provided by governments", "Funding provided by investors to startups with high growth potential", "A type of loan from banks"],
    answer: "Funding provided by investors to startups with high growth potential",
    explanation: "Venture capital supports innovative and high-risk businesses."
  },

  {
    question: "What are the 4Ps of the marketing mix?",
    options: ["Product, Price, Place, Promotion", "People, Process, Physical Evidence, Promotion", "Planning, Production, Packaging, Promotion"],
    answer: "Product, Price, Place, Promotion",
    explanation: "The 4Ps are the foundation of marketing strategy."
  },
  {
    question: "Explain 'target market'.",
    options: ["The entire population", "A specific group of consumers a business aims to reach", "A random selection of customers"],
    answer: "A specific group of consumers a business aims to reach",
    explanation: "Targeting ensures marketing efforts are focused and effective."
  },
  {
    question: "Why is a target market important in strategy?",
    options: ["To reduce marketing costs", "To focus efforts on the most profitable customers", "To ignore customer needs"],
    answer: "To focus efforts on the most profitable customers",
    explanation: "Targeting improves marketing efficiency and ROI."
  },
  {
    question: "What is 'product differentiation'?",
    options: ["Making products identical to competitors", "Creating unique features to distinguish a product", "Reducing product quality"],
    answer: "Creating unique features to distinguish a product",
    explanation: "Differentiation helps products stand out in the market."
  },
  {
    question: "What is 'positioning'?",
    options: ["The physical location of a business", "Creating a distinct image of a product in the customer's mind", "A pricing strategy"],
    answer: "Creating a distinct image of a product in the customer's mind",
    explanation: "Positioning influences how customers perceive a product."
  },
  {
    question: "Describe the role of 'brand loyalty'.",
    options: ["To reduce customer retention", "To encourage repeat purchases and customer advocacy", "To increase competition"],
    answer: "To encourage repeat purchases and customer advocacy",
    explanation: "Brand loyalty strengthens customer relationships."
  },
  {
    question: "Name 3 digital marketing channels.",
    options: ["Social media, email, search engines", "TV, radio, newspapers", "Billboards, flyers, posters"],
    answer: "Social media, email, search engines",
    explanation: "Digital marketing channels are cost-effective and measurable."
  },
  {
    question: "What are the benefits of social media marketing?",
    options: ["Limited reach, high cost", "Increased engagement, cost-effectiveness", "Reduced customer interaction"],
    answer: "Increased engagement, cost-effectiveness",
    explanation: "Social media allows businesses to connect with customers directly."
  },
  {
    question: "What is the importance of market research?",
    options: ["To make uninformed decisions", "To understand customer needs and market trends", "To ignore competition"],
    answer: "To understand customer needs and market trends",
    explanation: "Market research provides insights for decision-making."
  },
  {
    question: "Explain 'consumer behavior'.",
    options: ["The study of how businesses operate", "The study of how consumers make purchasing decisions", "The study of employee performance"],
    answer: "The study of how consumers make purchasing decisions",
    explanation: "Understanding consumer behavior helps businesses tailor their strategies."
  },
  {
    question: "What is 'market penetration' strategy?",
    options: ["Entering a new market", "Increasing market share in an existing market", "Reducing product offerings"],
    answer: "Increasing market share in an existing market",
    explanation: "Market penetration focuses on selling more to existing customers."
  },
  {
    question: "Define 'financial risk'.",
    options: ["The risk of losing money in investments", "The risk of employee turnover", "The risk of product failure"],
    answer: "The risk of losing money in investments",
    explanation: "Financial risk management is crucial for business stability."
  },
  {
    question: "What is the importance of 'leadership' in business?",
    options: ["To reduce employee motivation", "To inspire and guide employees towards achieving goals", "To limit innovation"],
    answer: "To inspire and guide employees towards achieving goals",
    explanation: "Effective leadership drives organizational success."
  },
  {
    question: "What is 'change management'?",
    options: ["Managing employee salaries", "Managing the transition of individuals and organizations to a desired future state", "Managing product development"],
    answer: "Managing the transition of individuals and organizations to a desired future state",
    explanation: "Change management ensures smooth transitions during organizational changes."
  },
  {
    question: "Define 'business negotiation'.",
    options: ["A process of resolving conflicts between employees", "A discussion aimed at reaching an agreement", "A method of financial planning"],
    answer: "A discussion aimed at reaching an agreement",
    explanation: "Negotiation is essential for resolving disputes and making deals."
  },
  {
    question: "What is 'teamwork' in a business context?",
    options: ["Working independently to achieve goals", "Collaborating with others to achieve common objectives", "Managing resources alone"],
    answer: "Collaborating with others to achieve common objectives",
    explanation: "Teamwork enhances productivity and innovation."
  },
  {
    question: "Explain the importance of 'networking' in business.",
    options: ["To reduce opportunities", "To build relationships and create opportunities", "To limit market reach"],
    answer: "To build relationships and create opportunities",
    explanation: "Networking helps businesses grow and access resources."
  },
  {
    question: "What is 'business continuity planning'?",
    options: ["Planning for employee vacations", "Ensuring operations continue during and after a disruption", "Planning for product launches"],
    answer: "Ensuring operations continue during and after a disruption",
    explanation: "Business continuity planning minimizes downtime during crises."
  },
  {
    question: "Define 'franchise'.",
    options: ["A type of business partnership", "A legal agreement to operate under an established brand", "A government policy for businesses"],
    answer: "A legal agreement to operate under an established brand",
    explanation: "Franchising allows businesses to expand using a proven model."
  },
  {
    question: "What is a 'joint venture'?",
    options: ["A business owned by one individual", "A partnership between two or more businesses for a specific project", "A government-owned business"],
    answer: "A partnership between two or more businesses for a specific project",
    explanation: "Joint ventures allow businesses to share resources and risks."
  },

  {
    question: "Define 'working capital'.",
    options: ["The capital used for long-term investments", "The difference between current assets and current liabilities", "The total revenue of a business"],
    answer: "The difference between current assets and current liabilities",
    explanation: "Working capital ensures a business can meet short-term obligations."
  },
  {
    question: "Why is working capital important?",
    options: ["To fund long-term projects", "To ensure a business can meet its short-term obligations", "To reduce profitability"],
    answer: "To ensure a business can meet its short-term obligations",
    explanation: "Adequate working capital is essential for day-to-day operations."
  },
  {
    question: "Differentiate between 'fixed cost' and 'variable cost'.",
    options: ["Fixed costs change with production; variable costs remain constant", "Fixed costs remain constant; variable costs change with production", "Fixed costs are optional; variable costs are mandatory"],
    answer: "Fixed costs remain constant; variable costs change with production",
    explanation: "Fixed costs do not vary with output, while variable costs do."
  },
  {
    question: "What is 'break-even analysis'?",
    options: ["A method to calculate employee salaries", "A method to determine the point where revenue equals costs", "A method to evaluate market trends"],
    answer: "A method to determine the point where revenue equals costs",
    explanation: "Break-even analysis helps businesses determine profitability."
  },
  {
    question: "How is break-even analysis used to determine profitability?",
    options: ["By calculating total revenue", "By identifying the sales volume needed to cover costs", "By reducing production costs"],
    answer: "By identifying the sales volume needed to cover costs",
    explanation: "Break-even analysis shows the minimum sales required to avoid losses."
  },
  {
    question: "Explain the concept of 'debt-to-equity ratio'.",
    options: ["The ratio of total debt to total equity", "The ratio of revenue to expenses", "The ratio of assets to liabilities"],
    answer: "The ratio of total debt to total equity",
    explanation: "The debt-to-equity ratio measures a company's financial leverage."
  },
  {
    question: "Why is the debt-to-equity ratio important?",
    options: ["To measure employee performance", "To assess a company's financial leverage and risk", "To calculate profitability"],
    answer: "To assess a company's financial leverage and risk",
    explanation: "A high debt-to-equity ratio indicates higher financial risk."
  },
  {
    question: "What are the key components of a cash flow statement?",
    options: ["Revenue, expenses, profit", "Operating activities, investing activities, financing activities", "Assets, liabilities, equity"],
    answer: "Operating activities, investing activities, financing activities",
    explanation: "The cash flow statement tracks cash inflows and outflows."
  },
  {
    question: "Define 'financial forecasting'.",
    options: ["Predicting employee performance", "Estimating future financial outcomes based on historical data", "Calculating current profits"],
    answer: "Estimating future financial outcomes based on historical data",
    explanation: "Financial forecasting helps businesses plan for the future."
  },
  {
    question: "What is the importance of budgeting in a business?",
    options: ["To reduce financial control", "To plan and control financial resources", "To increase debt"],
    answer: "To plan and control financial resources",
    explanation: "Budgeting ensures efficient allocation of resources."
  },
  {
    question: "What is 'intellectual property'?",
    options: ["Physical assets owned by a business", "Creations of the mind, such as inventions and designs", "Financial investments"],
    answer: "Creations of the mind, such as inventions and designs",
    explanation: "Intellectual property protects innovations and creative works."
  },
  {
    question: "Explain the importance of 'branding'.",
    options: ["To reduce customer recognition", "To create a unique identity and build customer loyalty", "To increase production costs"],
    answer: "To create a unique identity and build customer loyalty",
    explanation: "Strong branding differentiates a business from competitors."
  },
  {
    question: "What is a 'SWOT analysis'?",
    options: ["A method to evaluate employee performance", "A framework for analyzing strengths, weaknesses, opportunities, and threats", "A financial reporting tool"],
    answer: "A framework for analyzing strengths, weaknesses, opportunities, and threats",
    explanation: "SWOT analysis helps businesses identify internal and external factors."
  },
  {
    question: "Define 'product life cycle'.",
    options: ["The lifespan of a business", "The stages a product goes through from introduction to decline", "The process of manufacturing a product"],
    answer: "The stages a product goes through from introduction to decline",
    explanation: "The product life cycle includes introduction, growth, maturity, and decline."
  },
  {
    question: "What are 'economies of scale'?",
    options: ["The increase in costs as production increases", "The cost advantages achieved through increased production", "The reduction in market competition"],
    answer: "The cost advantages achieved through increased production",
    explanation: "Economies of scale reduce per-unit costs as output increases."
  },
  {
    question: "Explain the role of 'logistics' in business.",
    options: ["Managing employee relationships", "Managing the flow of goods and services from production to consumption", "Managing financial investments"],
    answer: "Managing the flow of goods and services from production to consumption",
    explanation: "Logistics ensures efficient delivery of products to customers."
  },
  {
    question: "What is 'outsourcing'?",
    options: ["Hiring employees internally", "Contracting tasks to external parties", "Reducing product offerings"],
    answer: "Contracting tasks to external parties",
    explanation: "Outsourcing allows businesses to focus on core activities."
  },
  {
    question: "Define 'benchmarking'.",
    options: ["Comparing a company's performance to industry standards", "Reducing production costs", "Increasing employee salaries"],
    answer: "Comparing a company's performance to industry standards",
    explanation: "Benchmarking helps businesses identify areas for improvement."
  },
  {
    question: "What is 'lean management'?",
    options: ["A strategy to increase waste", "A methodology to maximize value and minimize waste", "A financial planning tool"],
    answer: "A methodology to maximize value and minimize waste",
    explanation: "Lean management focuses on efficiency and continuous improvement."
  },
  {
    question: "Explain 'total quality management' (TQM).",
    options: ["A focus on reducing quality", "A management approach focused on continuous improvement and customer satisfaction", "A financial reporting method"],
    answer: "A management approach focused on continuous improvement and customer satisfaction",
    explanation: "TQM ensures high-quality products and services."
  },

  {
    question: "What is the purpose of a job description?",
    options: ["To list employee salaries", "To outline the duties, responsibilities, and qualifications for a role", "To describe company goals"],
    answer: "To outline the duties, responsibilities, and qualifications for a role",
    explanation: "Job descriptions provide clarity for employees and employers."
  },
  {
    question: "Explain the recruitment process.",
    options: ["Hiring employees without evaluation", "A systematic process of identifying, attracting, and hiring qualified candidates", "Reducing employee numbers"],
    answer: "A systematic process of identifying, attracting, and hiring qualified candidates",
    explanation: "Recruitment ensures the right candidates are selected for the job."
  },
  {
    question: "What are the key stages of recruitment?",
    options: ["Planning, sourcing, screening, interviewing, hiring", "Training, evaluating, promoting", "Budgeting, forecasting, reporting"],
    answer: "Planning, sourcing, screening, interviewing, hiring",
    explanation: "Each stage ensures a thorough and effective recruitment process."
  },
  {
    question: "Define 'employee training'.",
    options: ["The process of reducing employee skills", "The process of improving employee skills and knowledge", "The process of hiring new employees"],
    answer: "The process of improving employee skills and knowledge",
    explanation: "Training enhances employee performance and productivity."
  },
  {
    question: "What are the benefits of employee training?",
    options: ["Reduced productivity", "Improved performance and job satisfaction", "Increased turnover"],
    answer: "Improved performance and job satisfaction",
    explanation: "Training helps employees develop skills and stay motivated."
  },
  {
    question: "Explain performance management systems.",
    options: ["Systems to reduce employee performance", "Systems to monitor and improve employee performance", "Systems to manage financial records"],
    answer: "Systems to monitor and improve employee performance",
    explanation: "Performance management ensures employees meet organizational goals."
  },
  {
    question: "How can performance management improve productivity?",
    options: ["By ignoring employee performance", "By setting clear goals and providing feedback", "By reducing employee training"],
    answer: "By setting clear goals and providing feedback",
    explanation: "Performance management aligns employee efforts with business objectives."
  },
  {
    question: "What is a 'collective bargaining agreement'?",
    options: ["An agreement between employees and management on wages and working conditions", "A financial contract", "A marketing strategy"],
    answer: "An agreement between employees and management on wages and working conditions",
    explanation: "Collective bargaining ensures fair treatment of employees."
  },
  {
    question: "Name 3 functions of HRM.",
    options: ["Recruitment, training, performance management", "Marketing, finance, operations", "Sales, production, logistics"],
    answer: "Recruitment, training, performance management",
    explanation: "HRM focuses on managing people within an organization."
  },
  {
    question: "What is 'employee retention'?",
    options: ["The process of reducing employee numbers", "The ability to keep employees within the organization", "The process of hiring new employees"],
    answer: "The ability to keep employees within the organization",
    explanation: "Employee retention reduces turnover and associated costs."
  },
  {
    question: "What are the key characteristics of an entrepreneur?",
    options: ["Risk-averse, passive, dependent", "Innovative, risk-taking, proactive", "Unmotivated, uncreative, follower"],
    answer: "Innovative, risk-taking, proactive",
    explanation: "Entrepreneurs drive innovation and business growth."
  },
  {
    question: "What is a 'business plan'?",
    options: ["A document outlining a company's goals and strategies", "A financial report", "A marketing strategy"],
    answer: "A document outlining a company's goals and strategies",
    explanation: "A business plan provides a roadmap for success."
  },
  {
    question: "Why is a business plan important?",
    options: ["To reduce clarity and direction", "To provide a roadmap for achieving business goals", "To limit funding opportunities"],
    answer: "To provide a roadmap for achieving business goals",
    explanation: "A business plan helps secure funding and guide decision-making."
  },
  {
    question: "Define 'start-up capital'.",
    options: ["The capital used for marketing", "The initial funding required to start a business", "The revenue generated by a business"],
    answer: "The initial funding required to start a business",
    explanation: "Start-up capital covers initial expenses like equipment and inventory."
  },
  {
    question: "Explain the concept of 'risk-taking' in entrepreneurship.",
    options: ["Avoiding risks to ensure safety", "Taking calculated risks to achieve business goals", "Ignoring potential opportunities"],
    answer: "Taking calculated risks to achieve business goals",
    explanation: "Risk-taking is essential for innovation and growth."
  },
  {
    question: "What is 'innovation' in entrepreneurship?",
    options: ["Copying competitors' ideas", "Introducing new ideas, products, or processes", "Reducing product quality"],
    answer: "Introducing new ideas, products, or processes",
    explanation: "Innovation drives business competitiveness and growth."
  },
  {
    question: "How do entrepreneurs identify business opportunities?",
    options: ["By ignoring market trends", "By analyzing market needs and trends", "By reducing innovation"],
    answer: "By analyzing market needs and trends",
    explanation: "Identifying opportunities is key to entrepreneurial success."
  },
  {
    question: "What is a 'feasibility study'?",
    options: ["A study to evaluate the viability of a business idea", "A financial report", "A marketing strategy"],
    answer: "A study to evaluate the viability of a business idea",
    explanation: "Feasibility studies assess the potential success of a business."
  },
  {
    question: "What role do mentors play for entrepreneurs?",
    options: ["To provide financial funding", "To offer guidance, advice, and support", "To limit innovation"],
    answer: "To offer guidance, advice, and support",
    explanation: "Mentors help entrepreneurs navigate challenges and grow their businesses."
  },
  {
    question: "Explain 'social entrepreneurship'.",
    options: ["Focusing solely on profits", "Using business principles to address social issues", "Ignoring societal needs"],
    answer: "Using business principles to address social issues",
    explanation: "Social entrepreneurship combines profit-making with social impact."
  }
];

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion.options.map((option, index) => `
    <label>
      <input type="radio" name="question" value="${option}">
      ${option}
    </label>
  `).join('');

  quizContainer.innerHTML = `
    <div class="question">
      <p>${currentQuestion.question}</p>
      <div class="options">${options}</div>
    </div>
  `;

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = false;

  scoreDisplay.textContent = score;
  totalQuestionsDisplay.textContent = questions.length;
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  if (!selectedOption) return;

  const userAnswer = selectedOption.value;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
    feedbackContainer.textContent = "Correct!";
    feedbackContainer.style.color = "green";
  } else {
    feedbackContainer.innerHTML = `Incorrect. The correct answer is: <strong>${correctAnswer}</strong>. <br> Explanation: ${questions[currentQuestionIndex].explanation}`;
    feedbackContainer.style.color = "red";
  }

  scoreDisplay.textContent = score;
}

nextButton.addEventListener('click', () => {
  checkAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your final score is ${score} out of ${questions.length}.</p>`;
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  }
});

prevButton.addEventListener('click', () => {
  currentQuestionIndex--;
  showQuestion();
});

showQuestion();