import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import next from '../assets/images/NextjsLogo.jpg'
import node from '../assets/images/NodeJsLogo.jpg'
import sql from '../assets/images/MySqlLogo.jpg'
import express from '../assets/images/ExpressJsLgog.jpg'
import csharp from '../assets/images/CSharpLogo.jpg'
import asp from '../assets/images/AspDotNetCoreLogo.jpg'
import img from '../assets/images/QuickLearn.png'
import harshit from '../assets/images/boy2.png'
import thedrawerboy from '../assets/images/thedrawerboy.png'

export const CoursesData = [
    {
        id: 1,
        image: html,
        courseName: "HTML",
        description: "This is javascript cource",
        category: "front-end",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "50",
        review: "5.0",
    },
    {
        id: 2,
        image: css,
        courseName: "CSS",
        description: "This is javascript cource",
        category: "front-end",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "50",
        review: "5.0",
    },
    {
        id: 3,
        image: js,
        courseName: "JavaScript",
        description: "This is javascript cource",
        category: "front-end",
        features: {
            a: "100+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
        },
        questions: "100",
        review: "5.0",
    },
    {
        id: 4,
        image: react,
        courseName: "React Js",
        description: "This is javascript cource",
        category: "front-end",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
        },
        questions: "50",
        review: "5.0",
    },
    {
        id: 5,
        image: next,
        courseName: "Next Js",
        description: "This is javascript cource",
        category: "front-end",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "50",
        review: "5.0",
    },
    {
        id: 6,
        image: node,
        courseName: "Node Js",
        description: "This is javascript cource",
        category: "back-end",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "50",
        review: "5.0",
    },
    {
        id: 7,
        image: express,
        courseName: "Express Js",
        description: "This is javascript cource",
        category: "back-end",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "50",
        review: "5.0",
    },
    {
        id: 8,
        image: csharp,
        courseName: "C#",
        description: "This is javascript cource",
        category: "back-end",
        features: {
            a: "100+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "100",
        review: "5.0",
    },
    {
        id: 9,
        image: asp,
        courseName: "ASP Dot Net Core",
        description: "This is javascript cource",
        category: "back-end",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "50",
        review: "5.0",
    },
    {
        id: 10,
        image: sql,
        courseName: "SQL",
        description: "This is javascript cource",
        category: "database",
        features: {
            a: "50+ Questions",
            b: "Interview Prepared",
            c: "Certificate Available",
            d: "100% Free"
        },
        questions: "50",
        review: "5.0",
    }
]

export const TeamData = [
    {
        id: 1,
        name: 'Harshit Sharma',
        age: 21,
        role: 'Software Developer & FullStack Developer',
        location: 'India',
        contact: {
            phone: '1234567890',
            email: 'harshit0505sharma@gmail.com',
            linkedin: 'loading...',
        },
        image: harshit, 
        about: 'I build scalable learning platforms and love sharing knowledge in web development, especially HTML, CSS, React, and backend tools like Node.js. Let’s build something amazing together!',
        description: 'Expert in ReactJs, NextJs, Tailwind CSS and UI/UX design. Passionate about building user-friendly interfaces.',
        services: [
            'Web Development',
            'Frontend Developer',
            'UI/UX Design',
        ],
        totalCourses: 8,
        courses: ['html', 'css', 'javascript', 'reactjs', 'nextjs', 'nodejs', 'expressjs', 'csharp', 'aspdotnetcore', 'sql'], // ✅ just course names
    },{
        id: 2,
        name: 'The Drawer Boy',
        age: 22,
        role: 'Content Creator & YouTuber',
        location: 'India',
        contact: {
            phone: '1234567890',
            email: 'thedrawerboy@gmail.com',
            youtube: 'loading...', 
            instagram: 'loading...',
        },
        image: thedrawerboy,
        about: 'I create engaging content focused on drawing, sketching, and realistic portrait art. Sharing my journey, tutorials, and creative process through YouTube and social media.',
        description: 'Specializes in pencil sketches, hyperrealistic portraits, and digital art. Passionate about inspiring others through art tutorials and time-lapse videos.',
        services: [
            'Sketching Tutorials',
            'Portrait Commissions',
            'Art Live Streams',
            'Content Creation',
        ],
        totalCourses: 3,
        courses: ['drawind tutorials', 'realistic portraits', 'digital drawing'],
    }
]

export const TestimonialsData = [
    {
        name: "Aarav Mehta",
        profession: "Frontend Developer",
        img: img,
        review: "Amazing platform! The instructors are very helpful and content is very well explained."
    },
    {
        name: "Sneha Kapoor",
        profession: "Data Analyst",
        img: img,
        review: "I loved the real-world projects and the lifetime access. Totally worth it!"
    },
    {
        name: "Ravi Sharma",
        profession: "Full Stack Developer",
        img: img,
        review: "The best learning experience I've had online. Highly recommended."
    },
    {
        name: "Aman Kumar",
        profession: "Designer",
        img: img,
        review: "This is the best learning experience have i felt."
    },
]

export const reviews = [
    {
        id: 1,
        name: "Alice",
        rating: 5,
        content: "Great course!",
        image: "",
        description:
            "One of the best learning experiences. The instructor's clarity and real-world examples were amazing.",
    },
    {
        id: 2,
        name: "Bob",
        rating: 4,
        content: "Very useful.",
        image: "",
        description:
            "Good pace and structured well. I gained practical skills I could apply immediately.",
    },
    {
        id: 3,
        name: "Charlie",
        rating: 5,
        content: "Loved it.",
        image: "",
        description:
            "Fantastic course! The community support and assignments helped a lot in deep learning.",
    },
    {
        id: 4,
        name: "Diana",
        rating: 3,
        content: "Could be better.",
        image: "",
        description:
            "Decent, but would love more real-world projects and clearer explanations in a few areas.",
    },
    {
        id: 5,
        name: "Ethan",
        rating: 5,
        content: "Excellent!",
        image: "",
        description:
            "Simple, well-paced and full of real examples. This course boosted my confidence a lot.",
    },
];

