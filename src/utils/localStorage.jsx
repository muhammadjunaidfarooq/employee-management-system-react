const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly sales report",
        description:
          "Collect and compile sales data for the monthly performance summary.",
        date: "2025-11-20",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update client contact list",
        description:
          "Refresh client database with new phone numbers and email addresses.",
        date: "2025-11-15",
        category: "Data Entry",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix payment integration bug",
        description:
          "Resolve the recurring payment API bug reported by the QA team.",
        date: "2025-11-10",
        category: "Development",
      },
    ],
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design onboarding UI",
        description:
          "Create wireframes for the new onboarding flow for mobile app.",
        date: "2025-11-21",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create icon set",
        description: "Deliver a consistent icon pack for dashboard navigation.",
        date: "2025-11-17",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Brand guideline update",
        description:
          "Update typography and color palette in the design guidelines.",
        date: "2025-11-25",
        category: "Branding",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Redesign admin analytics page",
        description: "Redesign layout focusing on clarity and visualization.",
        date: "2025-11-12",
        category: "UI/UX",
      },
    ],
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement JWT authentication",
        description: "Add login and token validation using JWT in backend.",
        date: "2025-11-22",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize database queries",
        description: "Improve MongoDB query performance by adding indexes.",
        date: "2025-11-18",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add pagination to users list",
        description: "Implement server-side pagination for user management.",
        date: "2025-11-24",
        category: "Backend",
      },
    ],
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Write test cases for product API",
        description:
          "Add Jest test cases for create/update/delete product functions.",
        date: "2025-11-21",
        category: "Testing",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix failing CI pipeline",
        description:
          "Resolve dependency errors causing automated tests to fail.",
        date: "2025-11-23",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update API documentation",
        description: "Document the new endpoints added for shipment tracking.",
        date: "2025-11-16",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Refactor old codebase",
        description: "Clean up legacy code in the invoice module.",
        date: "2025-11-11",
        category: "Refactoring",
      },
    ],
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Manage customer support tickets",
        description: "Reply and close pending customer support tickets.",
        date: "2025-11-20",
        category: "Support",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create FAQs",
        description: "Write FAQ content for the help center.",
        date: "2025-11-13",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare training material",
        description: "Create training slides for new customer service agents.",
        date: "2025-11-25",
        category: "Training",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = (key) => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
