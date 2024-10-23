//array di oggetti delle domande

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does RAM stand for?",
    correct_answer: "Random Access Memory",
    incorrect_answers: [
      "Read Access Memory",
      "Run Access Memory",
      "Random Allocation Memory",
    ],
    answer: [
      "Random Access Memory",
      "Read Access Memory",
      "Run Access Memory",
      "Random Allocation Memory",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What is the main function of an operating system?",
    correct_answer: "Managing hardware and software resources",
    incorrect_answers: [
      "Creating software",
      "Running databases",
      "Networking devices",
    ],
    answer: [
      "Managing hardware and software resources",
      "Creating software",
      "Running databases",
      "Networking devices",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which company developed the Windows operating system?",
    correct_answer: "Microsoft",
    incorrect_answers: ["Apple", "IBM", "Google"],
    answer: ["Microsoft", "Apple", "IBM", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which language is primarily used for web development?",
    correct_answer: "HTML",
    incorrect_answers: ["C++", "Python", "Java"],
    answer: ["HTML", "C++", "Python", "Java"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does the 'H' in HTTP stand for?",
    correct_answer: "Hypertext",
    incorrect_answers: ["Hardware", "Hexadecimal", "Hyperlink"],
    answer: ["Hypertext", "Hardware", "Hexadecimal", "Hyperlink"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What is the main component of a computer that processes data?",
    correct_answer: "CPU",
    incorrect_answers: ["RAM", "Motherboard", "GPU"],
    answer: ["CPU", "RAM", "Motherboard", "GPU"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which company created the iPhone?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Samsung", "Google"],
    answer: ["Apple", "Microsoft", "Samsung", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What is the shortcut key for copying text on most computers?",
    correct_answer: "Ctrl + C",
    incorrect_answers: ["Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    answer: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does HTML stand for?",
    correct_answer: "Hypertext Markup Language",
    incorrect_answers: [
      "Hyperlink Markup Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: [
      "Hypertext Markup Language",
      "Hyperlink Markup Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which company created the Android operating system?",
    correct_answer: "Google",
    incorrect_answers: ["Apple", "Microsoft", "Samsung"],
    answer: ["Google", "Apple", "Microsoft", "Samsung"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question:
      "Which programming language is primarily used to design websites?",
    correct_answer: "CSS",
    incorrect_answers: ["Python", "C#", "JavaScript"],
    answer: ["CSS", "Python", "C#", "JavaScript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which of these is a file extension for an image?",
    correct_answer: ".jpg",
    incorrect_answers: [".txt", ".exe", ".pdf"],
    answer: [".jpg", ".txt", ".exe", ".pdf"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does 'USB' stand for?",
    correct_answer: "Universal Serial Bus",
    incorrect_answers: [
      "Universal System Board",
      "United Serial Bus",
      "Universal Serial Board",
    ],
    answer: [
      "Universal Serial Bus",
      "Universal System Board",
      "United Serial Bus",
      "Universal Serial Board",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which of the following is an open-source operating system?",
    correct_answer: "Linux",
    incorrect_answers: ["Windows", "iOS", "macOS"],
    answer: ["Linux", "Windows", "iOS", "macOS"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which of the following is used to style websites?",
    correct_answer: "CSS",
    incorrect_answers: ["JavaScript", "HTML", "PHP"],
    answer: ["CSS", "JavaScript", "HTML", "PHP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question:
      "Which type of device is used to send data from a computer to the internet?",
    correct_answer: "Router",
    incorrect_answers: ["Switch", "Hub", "Modem"],
    answer: ["Router", "Switch", "Hub", "Modem"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does 'IP' stand for in IP address?",
    correct_answer: "Internet Protocol",
    incorrect_answers: [
      "Internet Password",
      "Internal Protocol",
      "Internet Page",
    ],
    answer: [
      "Internet Protocol",
      "Internet Password",
      "Internal Protocol",
      "Internet Page",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What type of software is a web browser?",
    correct_answer: "Application software",
    incorrect_answers: ["System software", "Utility software", "Firmware"],
    answer: [
      "Application software",
      "System software",
      "Utility software",
      "Firmware",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What is the purpose of an antivirus program?",
    correct_answer: "To detect and remove malware",
    incorrect_answers: [
      "To create viruses",
      "To install new software",
      "To manage passwords",
    ],
    answer: [
      "To detect and remove malware",
      "To create viruses",
      "To install new software",
      "To manage passwords",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Large Area Network",
      "Long Area Network",
      "Local Access Network",
    ],
    answer: [
      "Local Area Network",
      "Large Area Network",
      "Long Area Network",
      "Local Access Network",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which of the following is a storage device?",
    correct_answer: "Hard drive",
    incorrect_answers: ["Monitor", "Keyboard", "Mouse"],
    answer: ["Hard drive", "Monitor", "Keyboard", "Mouse"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does VPN stand for?",
    correct_answer: "Virtual Private Network",
    incorrect_answers: [
      "Virtual Public Network",
      "Visible Private Network",
      "Virtual Personal Network",
    ],
    answer: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Visible Private Network",
      "Virtual Personal Network",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which of these companies produces the iPad?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Samsung", "Sony"],
    answer: ["Apple", "Microsoft", "Samsung", "Sony"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does SEO stand for in web development?",
    correct_answer: "Search Engine Optimization",
    incorrect_answers: [
      "Secure Encryption Operations",
      "Software Engineering Optimization",
      "System Error Output",
    ],
    answer: [
      "Search Engine Optimization",
      "Secure Encryption Operations",
      "Software Engineering Optimization",
      "System Error Output",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which company is the creator of the search engine Bing?",
    correct_answer: "Microsoft",
    incorrect_answers: ["Google", "Yahoo", "Apple"],
    answer: ["Microsoft", "Google", "Yahoo", "Apple"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does 'AI' stand for?",
    correct_answer: "Artificial Intelligence",
    incorrect_answers: [
      "Automated Interface",
      "Application Interface",
      "Automated Intelligence",
    ],
    answer: [
      "Artificial Intelligence",
      "Automated Interface",
      "Application Interface",
      "Automated Intelligence",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "Which programming language is associated with web browsers?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Java", "Python", "C++"],
    answer: ["JavaScript", "Java", "Python", "C++"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question: "What does FTP stand for?",
    correct_answer: "File Transfer Protocol",
    incorrect_answers: [
      "Fast Transfer Protocol",
      "File Transport Program",
      "File Transfer Program",
    ],
    answer: [
      "File Transfer Protocol",
      "Fast Transfer Protocol",
      "File Transport Program",
      "File Transfer Program",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Easy",
    question:
      "Which programming language is commonly used for artificial intelligence and machine learning?",
    correct_answer: "Python",
    incorrect_answers: ["C++", "Java", "Ruby"],
    answer: ["Python", "C++", "Java", "Ruby"],
  },

  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What is the purpose of a DNS in networking?",
    correct_answer: "To translate domain names into IP addresses",
    incorrect_answers: [
      "To encrypt data",
      "To store website data",
      "To route network traffic",
    ],
    answer: [
      "To translate domain names into IP addresses",
      "To encrypt data",
      "To store website data",
      "To route network traffic",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which of these is a JavaScript framework?",
    correct_answer: "React",
    incorrect_answers: ["Laravel", "Django", "Rails"],
    answer: ["React", "Laravel", "Django", "Rails"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What does SQL stand for?",
    correct_answer: "Structured Query Language",
    incorrect_answers: [
      "Sequential Query Language",
      "Structured Queue Language",
      "Standard Query Language",
    ],
    answer: [
      "Structured Query Language",
      "Sequential Query Language",
      "Structured Queue Language",
      "Standard Query Language",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which type of network spans the largest geographical area?",
    correct_answer: "WAN",
    incorrect_answers: ["LAN", "MAN", "PAN"],
    answer: ["WAN", "LAN", "MAN", "PAN"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question:
      "Which of the following is a relational database management system?",
    correct_answer: "MySQL",
    incorrect_answers: ["MongoDB", "Cassandra", "Hadoop"],
    answer: ["MySQL", "MongoDB", "Cassandra", "Hadoop"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What does 'CLI' stand for in computing?",
    correct_answer: "Command Line Interface",
    incorrect_answers: [
      "Control Logic Interface",
      "Computer Level Interface",
      "Common Logic Interface",
    ],
    answer: [
      "Command Line Interface",
      "Control Logic Interface",
      "Computer Level Interface",
      "Common Logic Interface",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which of these is a version control system?",
    correct_answer: "Git",
    incorrect_answers: ["Docker", "Nginx", "Apache"],
    answer: ["Git", "Docker", "Nginx", "Apache"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which of these algorithms is used for sorting?",
    correct_answer: "Merge Sort",
    incorrect_answers: ["Dijkstra's Algorithm", "A* Algorithm", "RSA"],
    answer: ["Merge Sort", "Dijkstra's Algorithm", "A* Algorithm", "RSA"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What is Docker primarily used for?",
    correct_answer: "Containerization",
    incorrect_answers: ["Virtualization", "Encryption", "Backup"],
    answer: ["Containerization", "Virtualization", "Encryption", "Backup"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which of the following is a NoSQL database?",
    correct_answer: "CouchDB",
    incorrect_answers: ["PostgreSQL", "SQLite", "MariaDB"],
    answer: ["CouchDB", "PostgreSQL", "SQLite", "MariaDB"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which language is used to create macros in Microsoft Excel?",
    correct_answer: "VBA",
    incorrect_answers: ["Java", "Python", "C#"],
    answer: ["VBA", "Java", "Python", "C#"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which is the default file extension for Java source files?",
    correct_answer: ".java",
    incorrect_answers: [".class", ".js", ".jv"],
    answer: [".java", ".class", ".js", ".jv"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What does the 'O' in OAuth stand for?",
    correct_answer: "Open",
    incorrect_answers: ["Object", "Online", "Optional"],
    answer: ["Open", "Object", "Online", "Optional"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What does GPU stand for?",
    correct_answer: "Graphics Processing Unit",
    incorrect_answers: [
      "General Processing Unit",
      "Graphical Performance Unit",
      "Global Processing Unit",
    ],
    answer: [
      "Graphics Processing Unit",
      "General Processing Unit",
      "Graphical Performance Unit",
      "Global Processing Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which company is the creator of the Flutter framework?",
    correct_answer: "Google",
    incorrect_answers: ["Facebook", "Microsoft", "Amazon"],
    answer: ["Google", "Facebook", "Microsoft", "Amazon"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "In cybersecurity, what does 'MITM' stand for?",
    correct_answer: "Man In The Middle",
    incorrect_answers: [
      "Main Integrity Time Management",
      "Machine In Total Memory",
      "Monitor Inside Time Management",
    ],
    answer: [
      "Man In The Middle",
      "Main Integrity Time Management",
      "Machine In Total Memory",
      "Monitor Inside Time Management",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which of these is an open-source relational database?",
    correct_answer: "PostgreSQL",
    incorrect_answers: ["MongoDB", "Cassandra", "DynamoDB"],
    answer: ["PostgreSQL", "MongoDB", "Cassandra", "DynamoDB"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What does 'RAID' stand for in computing?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: [
      "Random Access Independent Disk",
      "Reliable Array of Internet Disks",
      "Read Access Input Data",
    ],
    answer: [
      "Redundant Array of Independent Disks",
      "Random Access Independent Disk",
      "Reliable Array of Internet Disks",
      "Read Access Input Data",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which algorithm is typically used for pathfinding in AI?",
    correct_answer: "A*",
    incorrect_answers: ["SHA-256", "QuickSort", "RSA"],
    answer: ["A*", "SHA-256", "QuickSort", "RSA"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question:
      "Which programming language is known for its use in data analysis?",
    correct_answer: "R",
    incorrect_answers: ["Go", "C#", "PHP"],
    answer: ["R", "Go", "C#", "PHP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which company developed Kubernetes?",
    correct_answer: "Google",
    incorrect_answers: ["IBM", "Amazon", "Microsoft"],
    answer: ["Google", "IBM", "Amazon", "Microsoft"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which cloud platform is managed by Amazon?",
    correct_answer: "AWS",
    incorrect_answers: ["Azure", "Google Cloud", "Digital Ocean"],
    answer: ["AWS", "Azure", "Google Cloud", "Digital Ocean"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What is the primary function of the ARP protocol?",
    correct_answer: "To map IP addresses to MAC addresses",
    incorrect_answers: [
      "To route packets across networks",
      "To encrypt data",
      "To establish a secure connection",
    ],
    answer: [
      "To map IP addresses to MAC addresses",
      "To route packets across networks",
      "To encrypt data",
      "To establish a secure connection",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "What is the default port number for HTTP?",
    correct_answer: "80",
    incorrect_answers: ["21", "22", "443"],
    answer: ["80", "21", "22", "443"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which company developed the programming language Swift?",
    correct_answer: "Apple",
    incorrect_answers: ["Google", "Microsoft", "Facebook"],
    answer: ["Apple", "Google", "Microsoft", "Facebook"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which protocol is commonly used for email transmission?",
    correct_answer: "SMTP",
    incorrect_answers: ["FTP", "HTTP", "SSH"],
    answer: ["SMTP", "FTP", "HTTP", "SSH"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Medium",
    question: "Which of the following is a Python web framework?",
    correct_answer: "Django",
    incorrect_answers: ["Flask", "React", "Spring"],
    answer: ["Django", "Flask", "React", "Spring"],
  },

  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which algorithm is used to solve the Traveling Salesman Problem (TSP) exactly?",
    correct_answer: "Dynamic Programming",
    incorrect_answers: [
      "Greedy Algorithm",
      "Backtracking",
      "Simulated Annealing",
    ],
    answer: [
      "Dynamic Programming",
      "Greedy Algorithm",
      "Backtracking",
      "Simulated Annealing",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "What does 'SOLID' stand for in object-oriented design?",
    correct_answer:
      "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
    incorrect_answers: [
      "Simple, Open-Source, Low-Cost, Independent, Dynamic",
      "Single-User, Online, Local, In-Memory, Distributed",
      "Systematic, Ordered, Logical, Independent, Dynamic",
    ],
    answer: [
      "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
      "Simple, Open-Source, Low-Cost, Independent, Dynamic",
      "Single-User, Online, Local, In-Memory, Distributed",
      "Systematic, Ordered, Logical, Independent, Dynamic",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which data structure uses a LIFO (Last In, First Out) approach?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Tree", "Graph"],
    answer: ["Stack", "Queue", "Tree", "Graph"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which algorithm has a worst-case time complexity of O(n^2)?",
    correct_answer: "Bubble Sort",
    incorrect_answers: ["Merge Sort", "Quick Sort", "Heap Sort"],
    answer: ["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "What is the minimum number of spanning trees in a connected graph with 'n' vertices and 'm' edges?",
    correct_answer: "One",
    incorrect_answers: ["n-1", "m-1", "Two"],
    answer: ["One", "n-1", "m-1", "Two"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "In computer security, what does the acronym XSS stand for?",
    correct_answer: "Cross-Site Scripting",
    incorrect_answers: [
      "XML Script Syntax",
      "Cross-Site Search",
      "Cross-Site Security",
    ],
    answer: [
      "Cross-Site Scripting",
      "XML Script Syntax",
      "Cross-Site Search",
      "Cross-Site Security",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which of these is a cryptographic hash function?",
    correct_answer: "SHA-256",
    incorrect_answers: ["RSA", "AES", "Blowfish"],
    answer: ["SHA-256", "RSA", "AES", "Blowfish"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which protocol is often used for secure communication over the Internet?",
    correct_answer: "TLS",
    incorrect_answers: ["FTP", "UDP", "HTTP"],
    answer: ["TLS", "FTP", "UDP", "HTTP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which memory management technique allows for non-contiguous memory allocation?",
    correct_answer: "Paging",
    incorrect_answers: ["Segmentation", "Swapping", "Fragmentation"],
    answer: ["Paging", "Segmentation", "Swapping", "Fragmentation"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "What is the time complexity of binary search in a sorted array?",
    correct_answer: "O(log n)",
    incorrect_answers: ["O(n)", "O(n log n)", "O(n^2)"],
    answer: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "In cryptography, what does 'AES' stand for?",
    correct_answer: "Advanced Encryption Standard",
    incorrect_answers: [
      "Advanced Encoding Standard",
      "Algorithm Encryption Scheme",
      "Authentication Encryption Standard",
    ],
    answer: [
      "Advanced Encryption Standard",
      "Advanced Encoding Standard",
      "Algorithm Encryption Scheme",
      "Authentication Encryption Standard",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which machine learning algorithm is commonly used for classification tasks?",
    correct_answer: "Support Vector Machines",
    incorrect_answers: [
      "K-Means Clustering",
      "Principal Component Analysis",
      "Linear Regression",
    ],
    answer: [
      "Support Vector Machines",
      "K-Means Clustering",
      "Principal Component Analysis",
      "Linear Regression",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "What is the maximum value of an unsigned 8-bit integer?",
    correct_answer: "255",
    incorrect_answers: ["127", "256", "1023"],
    answer: ["255", "127", "256", "1023"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which of the following is an NP-complete problem?",
    correct_answer: "Travelling Salesman Problem",
    incorrect_answers: ["Binary Search", "Dijkstra's Algorithm", "Merge Sort"],
    answer: [
      "Travelling Salesman Problem",
      "Binary Search",
      "Dijkstra's Algorithm",
      "Merge Sort",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "In operating systems, what does 'deadlock' refer to?",
    correct_answer: "A state where processes block each other indefinitely",
    incorrect_answers: [
      "A state of memory overflow",
      "A system crash",
      "A state of CPU overload",
    ],
    answer: [
      "A state where processes block each other indefinitely",
      "A state of memory overflow",
      "A system crash",
      "A state of CPU overload",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which sorting algorithm has the best average case time complexity?",
    correct_answer: "Merge Sort",
    incorrect_answers: ["Bubble Sort", "Selection Sort", "Insertion Sort"],
    answer: ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which of these concepts is used in dynamic programming?",
    correct_answer: "Memoization",
    incorrect_answers: ["Recursion", "Greedy Choice", "Branch and Bound"],
    answer: ["Memoization", "Recursion", "Greedy Choice", "Branch and Bound"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which storage architecture allows for high availability and redundancy?",
    correct_answer: "RAID",
    incorrect_answers: ["SSD", "NAS", "SAN"],
    answer: ["RAID", "SSD", "NAS", "SAN"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which of these languages is most commonly used for low-level hardware programming?",
    correct_answer: "C",
    incorrect_answers: ["Python", "Java", "Ruby"],
    answer: ["C", "Python", "Java", "Ruby"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which of the following is used to prevent race conditions?",
    correct_answer: "Mutex",
    incorrect_answers: ["Semaphore", "Heap", "Stack"],
    answer: ["Mutex", "Semaphore", "Heap", "Stack"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "What is the purpose of a 'sandbox' in software development?",
    correct_answer: "To isolate testing environments from production systems",
    incorrect_answers: [
      "To encrypt data",
      "To optimize performance",
      "To store backups",
    ],
    answer: [
      "To isolate testing environments from production systems",
      "To encrypt data",
      "To optimize performance",
      "To store backups",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which of the following is a form of symmetric key encryption?",
    correct_answer: "AES",
    incorrect_answers: ["RSA", "DSA", "Diffie-Hellman"],
    answer: ["AES", "RSA", "DSA", "Diffie-Hellman"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "In a binary tree, what is the maximum number of children a node can have?",
    correct_answer: "Two",
    incorrect_answers: ["One", "Three", "Four"],
    answer: ["Two", "One", "Three", "Four"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "What is the primary purpose of a firewall?",
    correct_answer: "To control incoming and outgoing network traffic",
    incorrect_answers: [
      "To manage file access",
      "To store encryption keys",
      "To monitor CPU usage",
    ],
    answer: [
      "To control incoming and outgoing network traffic",
      "To manage file access",
      "To store encryption keys",
      "To monitor CPU usage",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which of the following is an example of a distributed database system?",
    correct_answer: "Cassandra",
    incorrect_answers: ["MySQL", "SQLite", "PostgreSQL"],
    answer: ["Cassandra", "MySQL", "SQLite", "PostgreSQL"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "What is the time complexity of finding the median in an unsorted list?",
    correct_answer: "O(n log n)",
    incorrect_answers: ["O(n)", "O(1)", "O(n^2)"],
    answer: ["O(n log n)", "O(n)", "O(1)", "O(n^2)"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question: "Which of the following is a NoSQL database?",
    correct_answer: "MongoDB",
    incorrect_answers: ["PostgreSQL", "SQLite", "Oracle"],
    answer: ["MongoDB", "PostgreSQL", "SQLite", "Oracle"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Which of the following techniques is commonly used in machine learning to prevent overfitting?",
    correct_answer: "Regularization",
    incorrect_answers: ["Dropout", "Normalization", "Standardization"],
    answer: ["Regularization", "Dropout", "Normalization", "Standardization"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "Hard",
    question:
      "What is the typical complexity of Dijkstra's algorithm using a priority queue?",
    correct_answer: "O((V+E) log V)",
    incorrect_answers: ["O(V^2)", "O(VE)", "O(E log V)"],
    answer: ["O((V+E) log V)", "O(V^2)", "O(VE)", "O(E log V)"],
  },
];

//timer
// Imposta la durata del timer in secondi
const totalTime = 60; // es. 10 secondi
let timeLeft = totalTime;

// Definizione del plugin per il testo al centro
const centerTextPlugin = {
  id: "centerText", // Nome univoco del plugin
  afterDatasetsDraw: function (chart) {
    // Usa afterDatasetsDraw per disegnare il testo dopo il grafico
    const width = chart.width,
      height = chart.height,
      ctx = chart.ctx;

    ctx.save(); // Salva lo stato corrente del contesto del canvas

    const fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    const text1 = "SECONDI";
    const text2 = "RIMANENTI";
    const text = timeLeft + "s",
      textX = width / 2,
      textY = height / 2;

    // Disegna il testo senza cancellare il grafico
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 40px Arial";
    ctx.fillText(text, textX, textY);

    //testo before seconds
    ctx.font = "normal 10px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(text1, textX, textY - 30);

    //tetso after seconds
    ctx.font = "normal 10px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(text2, textX, textY + 30);
    ctx.restore(); // Ripristina lo stato precedente del contesto
  },
};

// Registra il plugin globalmente
Chart.register(centerTextPlugin);

const ctx = document.getElementById("timer").getContext("2d");

// Crea il grafico Doughnut
const chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    // labels: ['Tempo trascorso', 'Tempo restante'],
    datasets: [
      {
        data: [0, totalTime], // Inizialmente, nessun tempo trascorso
        backgroundColor: ["hsla(0, 0%, 100%, 0.4)", "#00FFFF"],
        borderWidth: 0,
        borderRadius: 20,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "80%", // Grandezza del buco al centro
    plugins: {
      tooltip: {
        legend: {
          display: false,
        },
        enabled: false, // Disabilita il tooltip
      },
    },
  },
});

// Aggiorna il timer ogni secondo
const interval = setInterval(() => {
  timeLeft--;

  // Aggiorna i dati del grafico
  chart.data.datasets[0].data = [totalTime - timeLeft, timeLeft];
  chart.update();

  // Ferma il timer quando il tempo raggiunge 0
  if (timeLeft <= 0) {
    clearInterval(interval);
  }
}, 1000);

//dichiarazione di varie variabili utili per le varie funzioni
let difficolta = localStorage.getItem("difficoltaDomande");

let answerButtons = document.getElementsByClassName("risposta");

const arraybuttonsAnswer = Array.from(answerButtons);

let punteggioUtente = 0;

let randomNumber = 0;

let indice = 0;

let indiceRis = 0;

let stringa = "";

let boolean = false;

let j = 0;

let p = 0;

//funzione che permette di cambiare colore ai tasti delle risposte quando selezioniati

const answerFunction = function (e) {
  for (let i = 0; i < arraybuttonsAnswer.length; i++) {
    arraybuttonsAnswer[i].style.backgroundColor = "rgba(255, 255, 255, 0.164)";
  }
  // console.log(e.target);
  e.preventDefault();
  let newAnswerButton = e.target;
  newAnswerButton.style.backgroundColor = "#C4008F";
  localStorage.setItem("rispostaEsatta", newAnswerButton.textContent);
};

let numeroDomande = localStorage.getItem("numeroDomande");

document.getElementById("question-number").innerText = numeroDomande;
//funzione di cambio pagina quando il tasto next diventa il tasto finish
const funzioneFinish = function () {
  console.log("sono finish");
  location.href = "../HTML/resultPage.html";
};

//funzione che gestisce il popolamento della domanda e delle risposte e il controllo se la risposta selezionata e giusta nel momento del submit

const popolamentoDomande = function () {
  console.log(p);
  console.log(stringa + "ciao");
  console.log(questions[p].correct_answer);
  console.log(localStorage.getItem("rispostaEsatta"));
  timeLeft = totalTime;
  if (questions[p].correct_answer === localStorage.getItem("rispostaEsatta")) {
    console.log("corretta");
    punteggioUtente++;
    console.log(punteggioUtente);
    localStorage.setItem("numeroRisposteCorrette", punteggioUtente);
    indiceRis++;
  } else if (
    questions[p].correct_answer !== localStorage.getItem("rispostaEsatta")
  ) {
    console.log("sbagliata");
    indiceRis++;
  } else if (
    questions[p].correct_answer !== localStorage.getItem("rispostaEsatta")
  ) {
    console.log("sbagliata");
    indiceRis++;
  } else if (
    questions[p].correct_answer !== localStorage.getItem("rispostaEsatta")
  ) {
    console.log("sbagliata");
    indiceRis++;
  }

  for (let i = 0; i < arraybuttonsAnswer.length; i++) {
    arraybuttonsAnswer[i].style.backgroundColor = "rgba(255, 255, 255, 0.164)";
  }
  console.log(localStorage.getItem("difficoltaDomande"));

  // if (
  //   questions[indice].difficulty === localStorage.getItem("difficoltaDomande")
  // ) {
  //   document.getElementById("domanda").innerText = questions[indice].question;
  //   let risposte = document.getElementsByClassName("risposta");

  //   const arrayRisposte = Array.from(risposte);

  //   for (let i = 0; i < arrayRisposte.length; i++) {
  //     arrayRisposte[i].innerText = questions[indice].answer[i];
  //   }
  // }
  // console.log(questions.length);
  // console.log(questions[84].difficulty);
  // console.log(difficolta);
  // console.log(difficolta.localeCompare(questions[84].difficulty));
  console.log(stringa);
  while (!boolean) {
    if (questions[j].difficulty === difficolta) {
      console.log(j);
      console.log("entrato");
      document.getElementById("domanda").innerText = questions[j].question;
      let risposte = document.getElementsByClassName("risposta");

      const arrayRisposte = Array.from(risposte);

      for (let i = 0; i < arrayRisposte.length; i++) {
        arrayRisposte[i].innerText = questions[j].answer[i];
      }
      boolean = true;
      p = j;
      j++;
    } else {
      p = j;
      j++;
    }
  }
  boolean = false;

  indice++;
  document.getElementById("attuale-question-number").innerText = indice;

  console.log("sono arrivato");
  if (indice >= numeroDomande) {
    console.log("sono entrato");
    document.getElementById("next-button").innerText = "Finish";
    document
      .getElementById("next-button")
      .addEventListener("click", funzioneFinish);
  }
  setInterval(popolamentoDomande, 60000);
};

let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", popolamentoDomande);

//hover per il tasto next

const hoverFunction = function (e) {
  button = e.target;
  button.style.backgroundColor = "#C4008F";
};

const outFunction = function (e) {
  button = e.target;
  button.style.backgroundColor = "#0C113B";
};

// const outFunctionBig = function (e) {
//   if (button.style.backgroundColor === "#C4008F") {
//     button.style.backgroundColor = "#C4008F";
//   } else {
//     button = e.target;
//     button.style.backgroundColor = "rgba(255, 255, 255, 0.164)";
//   }
// };

for (let i = 0; i < arraybuttonsAnswer.length; i++) {
  arraybuttonsAnswer[i].addEventListener("click", answerFunction);
  //   arraybuttonsAnswer[i].addEventListener("mouseover", hoverFunction);
  //   arraybuttonsAnswer[i].addEventListener("mouseout", outFunctionBig);
}

nextButton.addEventListener("mouseover", hoverFunction);
//non c'é assolutamente nessun bug qui TRANQUILLO
nextButton.addEventListener("mouseout", outFunction);

popolamentoDomande();
