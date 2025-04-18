
const employees = [
    {
      id: 1,
      firstName: "Ahmed",
      email: "e@e.com",
      password: "123",
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
      tasks: [
        {
          title: "Inventory Check",
          description: "Verify stock levels for gold rings.",
          date: "2025-04-10",
          category: "Inventory",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Customer Follow-up",
          description: "Call Mrs. Smith about her custom necklace.",
          date: "2025-04-09",
          category: "Customer Service",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Window Display Update",
          description: "Revamp front window for summer collection.",
          date: "2025-04-08",
          category: "Visual Merchandising",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 2,
      firstName: "Ali",
      email: "employee2@example.com",
      password: "123",
      taskCount: { active: 1, newTask: 1, completed: 2, failed: 1 },
      tasks: [
        {
          title: "Social Media Posting",
          description: "Post new earring arrivals on Instagram.",
          date: "2025-04-11",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Price Tagging",
          description: "Label all silver bracelets.",
          date: "2025-04-09",
          category: "Inventory",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Cleaning Countertops",
          description: "Polish and clean all display surfaces.",
          date: "2025-04-08",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Assist Sales",
          description: "Help with customer queries on diamond rings.",
          date: "2025-04-07",
          category: "Sales",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 3,
      firstName: "Fatima",
      email: "employee3@example.com",
      password: "123",
      taskCount: { active: 2, newTask: 2, completed: 1, failed: 0 },
      tasks: [
        {
          title: "Restock Shelves",
          description: "Refill sapphire collection display.",
          date: "2025-04-10",
          category: "Inventory",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "VIP Client Call",
          description: "Call Mr. Thomas regarding his special order.",
          date: "2025-04-10",
          category: "Customer Service",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Email Campaign Draft",
          description: "Draft newsletter for upcoming sale.",
          date: "2025-04-08",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 4,
      firstName: "Hassan",
      email: "employee4@example.com",
      password: "123",
      taskCount: { active: 1, newTask: 1, completed: 2, failed: 1 },
      tasks: [
        {
          title: "Polish Jewelry",
          description: "Clean all platinum pieces for display.",
          date: "2025-04-09",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Assist Designer",
          description: "Help with custom jewelry sketch digitization.",
          date: "2025-04-08",
          category: "Design",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
        {
          title: "Log New Inventory",
          description: "Add new stock entries to POS system.",
          date: "2025-04-11",
          category: "Inventory",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Reorganize Safe",
          description: "Organize high-value pieces in vault.",
          date: "2025-04-10",
          category: "Security",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 5,
      firstName: "Ayesha",
      email: "employee5@example.com",
      password: "123",
      taskCount: { active: 2, newTask: 2, completed: 2, failed: 1 },
      tasks: [
        {
          title: "Update Website",
          description: "Upload new bracelet product photos.",
          date: "2025-04-11",
          category: "E-Commerce",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Create Ads",
          description: "Design Facebook ad creatives.",
          date: "2025-04-09",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Prepare Gift Boxes",
          description: "Wrap up pre-orders for Mother's Day.",
          date: "2025-04-08",
          category: "Logistics",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Team Meeting Notes",
          description: "Summarize staff meeting discussions.",
          date: "2025-04-07",
          category: "Admin",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
        {
          title: "Fix Broken Display",
          description: "Repair cracked showcase glass.",
          date: "2025-04-11",
          category: "Maintenance",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      ],
    },
  ];
  


  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
         }];


         export const setLocalStorage= ()=>{
             localStorage.setItem('employees', JSON.stringify(employees))
             localStorage.setItem('admin', JSON.stringify(admin))
         }

         export const getLocalStorage= ()=>{
         const employees1 = JSON.parse(localStorage.getItem('employees'))
         const admin1 = JSON.parse(localStorage.getItem('admin'))
         
         
         return{employees,admin}

         }
