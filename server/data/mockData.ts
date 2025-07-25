import {
  User,
  Employee,
  Department,
  LeaveApplication,
  LeaveBalance,
  Reimbursement,
  Payslip,
  AttendanceRecord,
  Facility,
  FacilityBooking,
  Issue,
} from "@shared/api";

// Mock Users (Authentication data)
export const mockUsers: User[] = [
  {
    employeeId: "EMP001",
    name: "Rajesh Kumar Singh",
    email: "rajesh.singh@nalco.com",
    role: "employee",
    department: "Human Resources",
    designation: "HR Executive",
    joinDate: "2022-03-15",
    reportingManager: "AUTH001",
    phone: "+91-9876543210",
    isActive: true,
  },
  {
    employeeId: "AUTH001",
    name: "Dr. Priya Sharma",
    email: "priya.sharma@nalco.com",
    role: "authority",
    department: "Human Resources",
    designation: "HR Manager",
    joinDate: "2019-01-10",
    phone: "+91-9876543211",
    isActive: true,
  },
  {
    employeeId: "ADMIN001",
    name: "Vikram Patel",
    email: "vikram.patel@nalco.com",
    role: "admin",
    department: "IT",
    designation: "System Administrator",
    joinDate: "2020-06-01",
    phone: "+91-9876543212",
    isActive: true,
  },
];

// Comprehensive Employee Directory
export const mockEmployees: Employee[] = [
  {
    employeeId: "EMP001",
    name: "Rajesh Kumar Singh",
    email: "rajesh.singh@nalco.com",
    phone: "+91-9876543210",
    department: "Human Resources",
    designation: "HR Executive",
    reportingManager: "AUTH001",
    location: "Bhubaneswar",
    extension: "1234",
    skills: ["Recruitment", "Employee Relations", "Performance Management"],
    joinDate: "2022-03-15",
    isActive: true,
  },
  {
    employeeId: "EMP002",
    name: "Sunita Devi",
    email: "sunita.devi@nalco.com",
    phone: "+91-9876543213",
    department: "Finance",
    designation: "Accounts Officer",
    reportingManager: "AUTH002",
    location: "Bhubaneswar",
    extension: "1235",
    skills: ["Financial Reporting", "Budgeting", "Taxation"],
    joinDate: "2021-07-20",
    isActive: true,
  },
  {
    employeeId: "EMP003",
    name: "Mohammad Alam",
    email: "mohammad.alam@nalco.com",
    phone: "+91-9876543214",
    department: "Operations",
    designation: "Production Supervisor",
    reportingManager: "AUTH003",
    location: "Angul",
    extension: "1236",
    skills: ["Production Planning", "Quality Control", "Safety Management"],
    joinDate: "2020-11-05",
    isActive: true,
  },
  {
    employeeId: "EMP004",
    name: "Lakshmi Narayanan",
    email: "lakshmi.narayanan@nalco.com",
    phone: "+91-9876543215",
    department: "Engineering",
    designation: "Mechanical Engineer",
    reportingManager: "AUTH004",
    location: "Damanjodi",
    extension: "1237",
    skills: ["Equipment Maintenance", "Project Management", "CAD Design"],
    joinDate: "2023-01-12",
    isActive: true,
  },
  {
    employeeId: "EMP005",
    name: "Amit Khanna",
    email: "amit.khanna@nalco.com",
    phone: "+91-9876543216",
    department: "Sales & Marketing",
    designation: "Sales Executive",
    reportingManager: "AUTH005",
    location: "Delhi",
    extension: "1238",
    skills: ["Client Relations", "Market Analysis", "Sales Strategy"],
    joinDate: "2022-09-18",
    isActive: true,
  },
  {
    employeeId: "EMP006",
    name: "Kavitha Reddy",
    email: "kavitha.reddy@nalco.com",
    phone: "+91-9876543217",
    department: "IT",
    designation: "Software Developer",
    reportingManager: "ADMIN001",
    location: "Bhubaneswar",
    extension: "1239",
    skills: ["Java", "React", "Database Management"],
    joinDate: "2023-03-22",
    isActive: true,
  },
  {
    employeeId: "EMP007",
    name: "Ravi Teja",
    email: "ravi.teja@nalco.com",
    phone: "+91-9876543218",
    department: "Safety",
    designation: "Safety Officer",
    reportingManager: "AUTH006",
    location: "Angul",
    extension: "1240",
    skills: ["Risk Assessment", "Safety Training", "Compliance"],
    joinDate: "2021-12-08",
    isActive: true,
  },
  {
    employeeId: "EMP008",
    name: "Geeta Mishra",
    email: "geeta.mishra@nalco.com",
    phone: "+91-9876543219",
    department: "Quality Assurance",
    designation: "QA Analyst",
    reportingManager: "AUTH007",
    location: "Damanjodi",
    extension: "1241",
    skills: ["Quality Testing", "Process Improvement", "Documentation"],
    joinDate: "2022-05-14",
    isActive: true,
  },
  {
    employeeId: "AUTH001",
    name: "Dr. Priya Sharma",
    email: "priya.sharma@nalco.com",
    phone: "+91-9876543211",
    department: "Human Resources",
    designation: "HR Manager",
    location: "Bhubaneswar",
    extension: "1001",
    skills: ["Leadership", "Strategic HR", "Organizational Development"],
    joinDate: "2019-01-10",
    isActive: true,
  },
  {
    employeeId: "AUTH002",
    name: "Suresh Babu",
    email: "suresh.babu@nalco.com",
    phone: "+91-9876543220",
    department: "Finance",
    designation: "Finance Manager",
    location: "Bhubaneswar",
    extension: "1002",
    skills: ["Financial Planning", "Investment Management", "Risk Management"],
    joinDate: "2018-04-15",
    isActive: true,
  },
  {
    employeeId: "AUTH003",
    name: "Ramesh Chandran",
    email: "ramesh.chandran@nalco.com",
    phone: "+91-9876543221",
    department: "Operations",
    designation: "Operations Manager",
    location: "Angul",
    extension: "1003",
    skills: ["Operations Management", "Lean Manufacturing", "Supply Chain"],
    joinDate: "2017-08-22",
    isActive: true,
  },
  {
    employeeId: "AUTH004",
    name: "Anita Das",
    email: "anita.das@nalco.com",
    phone: "+91-9876543222",
    department: "Engineering",
    designation: "Chief Engineer",
    location: "Damanjodi",
    extension: "1004",
    skills: ["Engineering Management", "Innovation", "Technical Leadership"],
    joinDate: "2016-11-30",
    isActive: true,
  },
  {
    employeeId: "AUTH005",
    name: "Prakash Joshi",
    email: "prakash.joshi@nalco.com",
    phone: "+91-9876543223",
    department: "Sales & Marketing",
    designation: "Sales Manager",
    location: "Mumbai",
    extension: "1005",
    skills: ["Sales Management", "Business Development", "Customer Relations"],
    joinDate: "2019-02-14",
    isActive: true,
  },
];

// Mock Departments (NALCO Scale Budgets in INR Crores)
export const mockDepartments: Department[] = [
  {
    id: "DEPT001",
    name: "Human Resources",
    head: "Dr. Priya Sharma",
    headEmployeeId: "AUTH001",
    totalEmployees: 15,
    location: "Bhubaneswar Corporate Office",
    budget: 50000000, // ₹5 Crores - HR operations, training, recruitment
    isActive: true,
  },
  {
    id: "DEPT002",
    name: "Finance & Accounts",
    head: "Suresh Babu",
    headEmployeeId: "AUTH002",
    totalEmployees: 22,
    location: "Bhubaneswar Corporate Office",
    budget: 120000000, // ₹12 Crores - Financial operations, audit, compliance
    isActive: true,
  },
  {
    id: "DEPT003",
    name: "Plant Operations",
    head: "Ramesh Chandran",
    headEmployeeId: "AUTH003",
    totalEmployees: 145,
    location: "NALCO Angul/Damanjodi",
    budget: 500000000, // ₹50 Crores - Plant operations, maintenance, production
    isActive: true,
  },
  {
    id: "DEPT004",
    name: "Engineering & Projects",
    head: "Anita Das",
    headEmployeeId: "AUTH004",
    totalEmployees: 89,
    location: "Damanjodi/Angul",
    budget: 350000000, // ₹35 Crores - Engineering projects, R&D, modernization
    isActive: true,
  },
  {
    id: "DEPT005",
    name: "Sales & Marketing",
    head: "Prakash Joshi",
    headEmployeeId: "AUTH005",
    totalEmployees: 34,
    location: "Bhubaneswar/Regional Offices",
    budget: 80000000, // ₹8 Crores - Marketing, sales operations, customer relations
    isActive: true,
  },
];

// Mock Leave Applications
export const mockLeaveApplications: LeaveApplication[] = [
  {
    id: "LEAVE001",
    employeeId: "EMP001",
    employeeName: "Rajesh Kumar Singh",
    leaveType: "annual",
    startDate: "2024-04-15",
    endDate: "2024-04-17",
    days: 3,
    reason: "Family function - sister's wedding",
    status: "pending",
    appliedDate: "2024-03-20",
    handoverDetails: "Tasks delegated to Sunita Devi for the period",
  },
  {
    id: "LEAVE002",
    employeeId: "EMP002",
    employeeName: "Sunita Devi",
    leaveType: "sick",
    startDate: "2024-03-25",
    endDate: "2024-03-26",
    days: 2,
    reason: "Fever and cold",
    status: "approved",
    appliedDate: "2024-03-24",
    approvedBy: "AUTH002",
    approvedDate: "2024-03-24",
  },
  {
    id: "LEAVE003",
    employeeId: "EMP003",
    employeeName: "Mohammad Alam",
    leaveType: "casual",
    startDate: "2024-04-01",
    endDate: "2024-04-01",
    days: 1,
    reason: "Personal work",
    status: "approved",
    appliedDate: "2024-03-28",
    approvedBy: "AUTH003",
    approvedDate: "2024-03-29",
  },
];

// Mock Leave Balances
export const mockLeaveBalances: LeaveBalance[] = [
  {
    employeeId: "EMP001",
    annual: 18,
    sick: 10,
    casual: 12,
    totalAllocated: 40,
    totalUsed: 8,
    totalRemaining: 32,
  },
  {
    employeeId: "EMP002",
    annual: 15,
    sick: 8,
    casual: 10,
    totalAllocated: 33,
    totalUsed: 12,
    totalRemaining: 21,
  },
];

// Mock Reimbursements (Indian Standards)
export const mockReimbursements: Reimbursement[] = [
  {
    id: "REIMB001",
    employeeId: "EMP001",
    employeeName: "Rajesh Kumar Singh",
    type: "travel",
    amount: 4500, // Train ticket (Bhubaneswar-Delhi) + Local travel
    currency: "INR",
    description:
      "Official travel to Delhi for NALCO training program - AC 2-Tier train ticket + local conveyance",
    submittedDate: "2024-03-15",
    status: "pending",
  },
  {
    id: "REIMB002",
    employeeId: "EMP004",
    employeeName: "Lakshmi Narayanan",
    type: "medical",
    amount: 3200, // Medical reimbursement as per NALCO policy
    currency: "INR",
    description:
      "Annual health checkup at NALCO empanelled hospital - Full body checkup including ECG, Blood tests",
    submittedDate: "2024-03-10",
    status: "approved",
    approvedBy: "AUTH004",
    approvedDate: "2024-03-12",
  },
  {
    id: "REIMB003",
    employeeId: "EMP003",
    employeeName: "Mohammad Alam",
    type: "food",
    amount: 850, // Daily meal allowance for outstation duty
    currency: "INR",
    description:
      "Meal expenses during plant inspection duty at NALCO Angul - 2 days @ ₹425/day",
    submittedDate: "2024-03-18",
    status: "approved",
    approvedBy: "AUTH003",
    approvedDate: "2024-03-20",
  },
];

// Mock Facilities
export const mockFacilities: Facility[] = [
  {
    id: "FAC001",
    name: "Conference Room A",
    type: "conference-hall",
    capacity: 20,
    location: "Ground Floor, Admin Block",
    amenities: [
      "Projector",
      "Audio System",
      "Video Conferencing",
      "Whiteboard",
    ],
    isActive: true,
  },
  {
    id: "FAC002",
    name: "Meeting Room 1",
    type: "meeting-room",
    capacity: 8,
    location: "First Floor, HR Block",
    amenities: ["Projector", "Whiteboard"],
    isActive: true,
  },
  {
    id: "FAC003",
    name: "Auditorium",
    type: "auditorium",
    capacity: 200,
    location: "Administrative Building",
    amenities: ["Stage", "Sound System", "Lighting", "Projector"],
    isActive: true,
  },
];

// Mock Facility Bookings
export const mockFacilityBookings: FacilityBooking[] = [
  {
    id: "BOOK001",
    facilityId: "FAC001",
    facilityName: "Conference Room A",
    employeeId: "EMP001",
    employeeName: "Rajesh Kumar Singh",
    date: "2024-04-10",
    startTime: "10:00",
    endTime: "12:00",
    purpose: "Team meeting for Q1 review",
    attendees: 15,
    status: "approved",
    approvedBy: "AUTH001",
    bookingDate: "2024-03-25",
  },
];

// Mock Issues
export const mockIssues: Issue[] = [
  {
    id: "ISSUE001",
    employeeId: "EMP006",
    employeeName: "Kavitha Reddy",
    title: "Laptop performance issues",
    description: "Laptop is running very slow, affecting productivity",
    category: "technical",
    priority: "medium",
    status: "open",
    createdDate: "2024-03-20",
    updatedDate: "2024-03-20",
  },
  {
    id: "ISSUE002",
    employeeId: "EMP002",
    employeeName: "Sunita Devi",
    title: "Air conditioning not working",
    description: "AC in accounts department is not cooling properly",
    category: "facility",
    priority: "high",
    status: "in-progress",
    assignedTo: "EMP999",
    assignedToName: "Maintenance Team",
    createdDate: "2024-03-18",
    updatedDate: "2024-03-19",
  },
];

// Mock Payslips (Updated for NALCO Indian Standards)
export const mockPayslips: Payslip[] = [
  {
    id: "PAY001_2024_03",
    employeeId: "EMP001",
    employeeName: "Rajesh Kumar Singh",
    month: "March",
    year: 2024,
    basicSalary: 65000, // NALCO Executive Level Basic Pay
    hra: 26000, // 40% of Basic as per NALCO HRA structure
    allowances: 12000, // DA + Transport + Medical Allowance
    overtime: 3500, // Overtime @ ₹350/hour for 10 hours
    bonus: 8000, // Performance Bonus
    grossSalary: 114500,
    pf: 7800, // 12% of Basic Salary (EPF)
    esi: 850, // ESI @ 0.75% of Gross (up to ceiling)
    tax: 18500, // Income Tax as per New Tax Regime
    otherDeductions: 1200, // Professional Tax + Union Fee
    totalDeductions: 28350,
    netSalary: 86150,
    generatedDate: "2024-03-31",
    paidDate: "2024-04-01",
    status: "paid",
  },
  {
    id: "PAY002_2024_03",
    employeeId: "EMP002",
    employeeName: "Sunita Devi",
    month: "March",
    year: 2024,
    basicSalary: 72000, // Senior Officer Level
    hra: 28800, // 40% of Basic
    allowances: 15000, // DA + Special Allowances
    overtime: 2800, // Weekend Work Compensation
    bonus: 10000, // Annual Performance Bonus (Prorated)
    grossSalary: 128600,
    pf: 8640, // 12% of Basic
    esi: 965, // ESI Contribution
    tax: 22000, // Income Tax
    otherDeductions: 1500, // Professional Tax + Other Deductions
    totalDeductions: 33105,
    netSalary: 95495,
    generatedDate: "2024-03-31",
    status: "generated",
  },
];

// Mock Attendance Records
export const mockAttendanceRecords: AttendanceRecord[] = [
  {
    id: "ATT001_2024_03_20",
    employeeId: "EMP001",
    date: "2024-03-20",
    checkIn: "09:15",
    checkOut: "18:30",
    workingHours: 8.75,
    overtimeHours: 0.75,
    status: "present",
    location: "Office",
  },
  {
    id: "ATT002_2024_03_21",
    employeeId: "EMP001",
    date: "2024-03-21",
    checkIn: "09:00",
    checkOut: "18:00",
    workingHours: 8,
    overtimeHours: 0,
    status: "present",
    location: "Office",
  },
];
