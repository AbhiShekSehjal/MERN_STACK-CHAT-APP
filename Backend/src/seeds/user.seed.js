
import { config } from "dotenv"
import User from "../Models/user.model.js"
// import Message from "../Models/message.model.js"
import { connectDB } from "../lib/db.js";

config();

const seedUsers = [
    {
        email: "sharma@example.com",
        fullName: "Priya Sharma",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        email: "pillai@example.com",
        fullName: "Manish Pillai",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/87.jpg",
    },
    {
        email: "verma@example.com",
        fullName: "Ananya Verma",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        email: "patel@example.com",
        fullName: "Isha Patel",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
        email: "kapoor@example.com",
        fullName: "Neha Kapoor",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    {
        email: "deshmukh@example.com",
        fullName: "Amit Deshmukh",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/49.jpg",
    },
    {
        email: "rani@example.com",
        fullName: "Radhika Rani",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
        email: "iyer@example.com",
        fullName: "Kavya Iyer",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    {
        email: "menon@example.com",
        fullName: "Divya Menon",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/58.jpg",
    },

    // Indian Male Users
    {
        email: "yadav@example.com",
        fullName: "Rahul Yadav",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
        email: "singh@example.com",
        fullName: "Arjun Singh",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    {
        email: "rai@example.com",
        fullName: "Shruti Rai",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
        email: "kumar@example.com",
        fullName: "Vivek Kumar",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/74.jpg",
    },
    {
        email: "jain@example.com",
        fullName: "Sachin Jain",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
        email: "banerjee@example.com",
        fullName: "Rohit Banerjee",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/men/38.jpg",
    },
];

const seedDatabase = async () => {
    try {
        await connectDB();

        // await User.deleteMany({});
        // await Message.deleteMany({});
        await User.insertMany(seedUsers);

        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Call the function
seedDatabase();