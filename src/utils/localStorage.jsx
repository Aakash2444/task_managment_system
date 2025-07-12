const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Submit Project Report",
          "description": "Prepare and submit the final project report to the manager.",
          "date": "2024-12-10",
          "category": "Report",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Meeting",
          "description": "Attend the weekly team meeting to discuss project updates.",
          "date": "2024-12-08",
          "category": "Meeting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code Review",
          "description": "Review the latest code changes and provide feedback.",
          "date": "2024-12-07",
          "category": "Code Review",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Client Presentation",
          "description": "Create and present the project update to the client.",
          "date": "2024-12-15",
          "category": "Presentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "System Testing",
          "description": "Perform testing on the new system features.",
          "date": "2024-12-09",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Bug Fixing",
          "description": "Fix critical bugs reported by QA.",
          "date": "2024-12-11",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Training Session",
          "description": "Attend the cybersecurity training session.",
          "date": "2024-12-12",
          "category": "Training",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Data Analysis",
          "description": "Analyze the new sales data for Q4 2024.",
          "date": "2024-12-10",
          "category": "Analysis",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "API Integration",
          "description": "Integrate the third-party API for payment processing.",
          "date": "2024-12-14",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Product Demo",
          "description": "Conduct a demo of the product to potential clients.",
          "date": "2024-12-13",
          "category": "Demo",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Website Redesign",
          "description": "Update the website layout for better user experience.",
          "date": "2024-12-20",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Audit Preparation",
          "description": "Prepare necessary documentation for the audit.",
          "date": "2024-12-18",
          "category": "Audit",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Employee Feedback",
          "description": "Collect feedback from employees for the year-end review.",
          "date": "2024-12-17",
          "category": "HR",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Create Infographic",
          "description": "Design an infographic for social media marketing.",
          "date": "2024-12-22",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Server Maintenance",
          "description": "Perform maintenance on the production server.",
          "date": "2024-12-06",
          "category": "Maintenance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Update User Manual",
          "description": "Update the user manual with the latest product features.",
          "date": "2024-12-08",
          "category": "Documentation",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Create Marketing Strategy",
          "description": "Develop a strategy for the Q1 2025 marketing campaign.",
          "date": "2024-12-19",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "IT Support",
          "description": "Provide support for the new employee system setup.",
          "date": "2024-12-07",
          "category": "Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Security Assessment",
          "description": "Conduct a security risk assessment of company assets.",
          "date": "2024-12-21",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
    
  }
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    // console.log(admin)
    // console.log(employees)
    return {employees,admin}
  }