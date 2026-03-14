# Angular Practice Exercises

## Exercise 1: E-Commerce Product Catalog (Beginner-Intermediate)

### Features to Implement:
1. Display products in a grid layout
2. Filter by category
3. Sort by price (low to high, high to low)
4. Search by product name
5. Add to cart functionality (store in service)
6. Cart page showing selected items with total price
7. Product details page with routing

### JSON Data:
```json
{
  "products": [
    {
      "id": "p1",
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.5,
      "stock": 15,
      "image": "https://via.placeholder.com/300x200?text=Headphones",
      "description": "High-quality wireless headphones with noise cancellation"
    },
    {
      "id": "p2",
      "name": "Running Shoes",
      "category": "Sports",
      "price": 129.99,
      "rating": 4.8,
      "stock": 8,
      "image": "https://via.placeholder.com/300x200?text=Shoes",
      "description": "Comfortable running shoes for all terrains"
    },
    {
      "id": "p3",
      "name": "Coffee Maker",
      "category": "Home",
      "price": 49.99,
      "rating": 4.2,
      "stock": 20,
      "image": "https://via.placeholder.com/300x200?text=Coffee",
      "description": "Programmable coffee maker with timer"
    },
    {
      "id": "p4",
      "name": "Yoga Mat",
      "category": "Sports",
      "price": 24.99,
      "rating": 4.6,
      "stock": 30,
      "image": "https://via.placeholder.com/300x200?text=Yoga",
      "description": "Non-slip yoga mat with carrying strap"
    },
    {
      "id": "p5",
      "name": "Smart Watch",
      "category": "Electronics",
      "price": 199.99,
      "rating": 4.7,
      "stock": 12,
      "image": "https://via.placeholder.com/300x200?text=Watch",
      "description": "Fitness tracking smart watch with heart rate monitor"
    },
    {
      "id": "p6",
      "name": "Desk Lamp",
      "category": "Home",
      "price": 34.99,
      "rating": 4.3,
      "stock": 25,
      "image": "https://via.placeholder.com/300x200?text=Lamp",
      "description": "LED desk lamp with adjustable brightness"
    },
    {
      "id": "p7",
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.4,
      "stock": 18,
      "image": "https://via.placeholder.com/300x200?text=Speaker",
      "description": "Portable waterproof bluetooth speaker"
    },
    {
      "id": "p8",
      "name": "Backpack",
      "category": "Sports",
      "price": 44.99,
      "rating": 4.5,
      "stock": 22,
      "image": "https://via.placeholder.com/300x200?text=Backpack",
      "description": "Durable hiking backpack with multiple compartments"
    }
  ]
}
```

---

## Exercise 2: Task Management App (Intermediate)

### Features to Implement:
1. Create, read, update, delete tasks (CRUD)
2. Mark tasks as complete/incomplete
3. Filter by status (all, active, completed)
4. Filter by priority
5. Search tasks
6. Sort by due date or priority
7. Use reactive forms for task creation/editing
8. Store data in a service with signals

### JSON Data:
```json
{
  "tasks": [
    {
      "id": "t1",
      "title": "Complete Angular project",
      "description": "Finish the movie app with all features",
      "priority": "high",
      "status": "in-progress",
      "dueDate": "2026-03-20",
      "createdAt": "2026-03-10",
      "tags": ["work", "coding"]
    },
    {
      "id": "t2",
      "title": "Buy groceries",
      "description": "Milk, eggs, bread, vegetables",
      "priority": "medium",
      "status": "pending",
      "dueDate": "2026-03-14",
      "createdAt": "2026-03-13",
      "tags": ["personal", "shopping"]
    },
    {
      "id": "t3",
      "title": "Gym workout",
      "description": "Leg day - squats and lunges",
      "priority": "low",
      "status": "completed",
      "dueDate": "2026-03-13",
      "createdAt": "2026-03-12",
      "tags": ["health", "fitness"]
    },
    {
      "id": "t4",
      "title": "Team meeting",
      "description": "Discuss Q2 goals and project timeline",
      "priority": "high",
      "status": "pending",
      "dueDate": "2026-03-15",
      "createdAt": "2026-03-11",
      "tags": ["work", "meeting"]
    },
    {
      "id": "t5",
      "title": "Read book",
      "description": "Finish reading 'Clean Code'",
      "priority": "low",
      "status": "in-progress",
      "dueDate": "2026-03-25",
      "createdAt": "2026-03-05",
      "tags": ["personal", "learning"]
    }
  ]
}
```

---

## Exercise 3: Blog Platform (Intermediate-Advanced)

### Features to Implement:
1. List all blog posts with pagination
2. Filter by category and author
3. Search posts by title or content
4. Post details page with comments
5. Add/delete comments (use reactive forms)
6. Like/unlike posts
7. Related posts section
8. Author profile page showing all their posts
9. Use route guards to protect comment functionality

### JSON Data:
```json
{
  "posts": [
    {
      "id": "post1",
      "title": "Getting Started with Angular Signals",
      "slug": "getting-started-angular-signals",
      "author": {
        "id": "a1",
        "name": "Sarah Johnson",
        "avatar": "https://via.placeholder.com/100?text=SJ"
      },
      "category": "Angular",
      "tags": ["angular", "signals", "tutorial"],
      "excerpt": "Learn how to use Angular signals for reactive state management",
      "content": "Angular signals provide a new way to handle reactive state...",
      "image": "https://via.placeholder.com/800x400?text=Angular+Signals",
      "publishedDate": "2026-03-10",
      "likes": 45,
      "views": 320,
      "comments": [
        {
          "id": "c1",
          "author": "John Doe",
          "content": "Great tutorial! Very helpful.",
          "date": "2026-03-11"
        },
        {
          "id": "c2",
          "author": "Jane Smith",
          "content": "Can you explain computed signals?",
          "date": "2026-03-12"
        }
      ]
    },
    {
      "id": "post2",
      "title": "TypeScript Best Practices 2026",
      "slug": "typescript-best-practices-2026",
      "author": {
        "id": "a2",
        "name": "Mike Chen",
        "avatar": "https://via.placeholder.com/100?text=MC"
      },
      "category": "TypeScript",
      "tags": ["typescript", "best-practices", "coding"],
      "excerpt": "Modern TypeScript patterns and practices for better code",
      "content": "TypeScript has evolved significantly. Here are the best practices...",
      "image": "https://via.placeholder.com/800x400?text=TypeScript",
      "publishedDate": "2026-03-08",
      "likes": 67,
      "views": 450,
      "comments": [
        {
          "id": "c3",
          "author": "Alice Brown",
          "content": "Love the utility types section!",
          "date": "2026-03-09"
        }
      ]
    },
    {
      "id": "post3",
      "title": "Building Scalable Web Apps",
      "slug": "building-scalable-web-apps",
      "author": {
        "id": "a1",
        "name": "Sarah Johnson",
        "avatar": "https://via.placeholder.com/100?text=SJ"
      },
      "category": "Architecture",
      "tags": ["architecture", "scalability", "web-development"],
      "excerpt": "Architectural patterns for building scalable applications",
      "content": "Scalability is crucial for modern web applications...",
      "image": "https://via.placeholder.com/800x400?text=Scalable+Apps",
      "publishedDate": "2026-03-05",
      "likes": 89,
      "views": 620,
      "comments": []
    },
    {
      "id": "post4",
      "title": "RxJS Operators You Should Know",
      "slug": "rxjs-operators-guide",
      "author": {
        "id": "a3",
        "name": "David Lee",
        "avatar": "https://via.placeholder.com/100?text=DL"
      },
      "category": "RxJS",
      "tags": ["rxjs", "operators", "reactive-programming"],
      "excerpt": "Master the most useful RxJS operators with examples",
      "content": "RxJS operators are powerful tools for reactive programming...",
      "image": "https://via.placeholder.com/800x400?text=RxJS",
      "publishedDate": "2026-03-12",
      "likes": 52,
      "views": 380,
      "comments": [
        {
          "id": "c4",
          "author": "Emma Wilson",
          "content": "switchMap vs mergeMap finally makes sense!",
          "date": "2026-03-13"
        }
      ]
    }
  ]
}
```

---

## Exercise 4: Restaurant Menu & Orders (Advanced)

### Features to Implement:
1. Display menu items by category (tabs or filters)
2. Add items to order with quantity selector
3. Customize items (add-ons, special instructions)
4. Shopping cart with item modification
5. Calculate total with tax and tip
6. Order history page
7. Search menu items
8. Filter by dietary preferences (vegetarian, vegan, gluten-free)
9. Rating and review system
10. Use signals for cart state management

### JSON Data:
```json
{
  "menuItems": [
    {
      "id": "m1",
      "name": "Classic Burger",
      "category": "Burgers",
      "price": 12.99,
      "description": "Beef patty with lettuce, tomato, onion, and special sauce",
      "image": "https://via.placeholder.com/300?text=Burger",
      "calories": 650,
      "dietary": ["gluten"],
      "rating": 4.5,
      "reviews": 120,
      "addOns": [
        { "id": "a1", "name": "Extra Cheese", "price": 1.50 },
        { "id": "a2", "name": "Bacon", "price": 2.00 },
        { "id": "a3", "name": "Avocado", "price": 1.75 }
      ]
    },
    {
      "id": "m2",
      "name": "Margherita Pizza",
      "category": "Pizza",
      "price": 14.99,
      "description": "Fresh mozzarella, tomato sauce, and basil",
      "image": "https://via.placeholder.com/300?text=Pizza",
      "calories": 800,
      "dietary": ["vegetarian", "gluten"],
      "rating": 4.7,
      "reviews": 95,
      "addOns": [
        { "id": "a4", "name": "Extra Cheese", "price": 2.00 },
        { "id": "a5", "name": "Mushrooms", "price": 1.50 },
        { "id": "a6", "name": "Olives", "price": 1.25 }
      ]
    },
    {
      "id": "m3",
      "name": "Caesar Salad",
      "category": "Salads",
      "price": 9.99,
      "description": "Romaine lettuce, parmesan, croutons, Caesar dressing",
      "image": "https://via.placeholder.com/300?text=Salad",
      "calories": 320,
      "dietary": ["vegetarian", "gluten"],
      "rating": 4.3,
      "reviews": 78,
      "addOns": [
        { "id": "a7", "name": "Grilled Chicken", "price": 3.50 },
        { "id": "a8", "name": "Shrimp", "price": 4.50 }
      ]
    },
    {
      "id": "m4",
      "name": "Veggie Wrap",
      "category": "Wraps",
      "price": 10.99,
      "description": "Grilled vegetables, hummus, and mixed greens",
      "image": "https://via.placeholder.com/300?text=Wrap",
      "calories": 420,
      "dietary": ["vegetarian", "vegan"],
      "rating": 4.4,
      "reviews": 65,
      "addOns": [
        { "id": "a9", "name": "Feta Cheese", "price": 1.50 },
        { "id": "a10", "name": "Avocado", "price": 1.75 }
      ]
    },
    {
      "id": "m5",
      "name": "Chocolate Lava Cake",
      "category": "Desserts",
      "price": 7.99,
      "description": "Warm chocolate cake with molten center, vanilla ice cream",
      "image": "https://via.placeholder.com/300?text=Cake",
      "calories": 580,
      "dietary": ["vegetarian", "gluten"],
      "rating": 4.8,
      "reviews": 142,
      "addOns": []
    },
    {
      "id": "m6",
      "name": "Iced Coffee",
      "category": "Beverages",
      "price": 4.99,
      "description": "Cold brew coffee over ice",
      "image": "https://via.placeholder.com/300?text=Coffee",
      "calories": 120,
      "dietary": ["vegetarian", "vegan", "gluten-free"],
      "rating": 4.6,
      "reviews": 88,
      "addOns": [
        { "id": "a11", "name": "Extra Shot", "price": 1.00 },
        { "id": "a12", "name": "Oat Milk", "price": 0.75 }
      ]
    }
  ],
  "orders": [
    {
      "id": "o1",
      "date": "2026-03-12",
      "items": [
        {
          "menuItemId": "m1",
          "quantity": 2,
          "addOns": ["a1", "a2"],
          "specialInstructions": "No onions"
        },
        {
          "menuItemId": "m6",
          "quantity": 2,
          "addOns": ["a11"],
          "specialInstructions": ""
        }
      ],
      "subtotal": 35.96,
      "tax": 3.24,
      "tip": 7.00,
      "total": 46.20,
      "status": "delivered"
    }
  ]
}
```

---

## Exercise 5: Weather Dashboard (Intermediate)

### Features to Implement:
1. Display current weather for multiple cities
2. Add/remove cities
3. 5-day forecast view
4. Temperature unit toggle (Celsius/Fahrenheit)
5. Search cities with autocomplete
6. Favorite cities (store in localStorage)
7. Weather alerts/warnings
8. Use pipes for temperature conversion
9. Use HttpClient to simulate API calls

### JSON Data:
```json
{
  "cities": [
    {
      "id": "c1",
      "name": "New York",
      "country": "USA",
      "coordinates": { "lat": 40.7128, "lon": -74.0060 },
      "current": {
        "temp": 18,
        "feelsLike": 16,
        "condition": "Partly Cloudy",
        "icon": "partly-cloudy",
        "humidity": 65,
        "windSpeed": 15,
        "pressure": 1013,
        "visibility": 10
      },
      "forecast": [
        { "day": "Mon", "high": 20, "low": 15, "condition": "Sunny", "icon": "sunny" },
        { "day": "Tue", "high": 22, "low": 16, "condition": "Cloudy", "icon": "cloudy" },
        { "day": "Wed", "high": 19, "low": 14, "condition": "Rainy", "icon": "rainy" },
        { "day": "Thu", "high": 21, "low": 15, "condition": "Sunny", "icon": "sunny" },
        { "day": "Fri", "high": 23, "low": 17, "condition": "Partly Cloudy", "icon": "partly-cloudy" }
      ],
      "alerts": []
    },
    {
      "id": "c2",
      "name": "London",
      "country": "UK",
      "coordinates": { "lat": 51.5074, "lon": -0.1278 },
      "current": {
        "temp": 12,
        "feelsLike": 10,
        "condition": "Rainy",
        "icon": "rainy",
        "humidity": 80,
        "windSpeed": 20,
        "pressure": 1008,
        "visibility": 8
      },
      "forecast": [
        { "day": "Mon", "high": 14, "low": 10, "condition": "Rainy", "icon": "rainy" },
        { "day": "Tue", "high": 13, "low": 9, "condition": "Cloudy", "icon": "cloudy" },
        { "day": "Wed", "high": 15, "low": 11, "condition": "Partly Cloudy", "icon": "partly-cloudy" },
        { "day": "Thu", "high": 16, "low": 12, "condition": "Sunny", "icon": "sunny" },
        { "day": "Fri", "high": 14, "low": 10, "condition": "Rainy", "icon": "rainy" }
      ],
      "alerts": [
        {
          "type": "warning",
          "message": "Heavy rain expected in the evening"
        }
      ]
    },
    {
      "id": "c3",
      "name": "Tokyo",
      "country": "Japan",
      "coordinates": { "lat": 35.6762, "lon": 139.6503 },
      "current": {
        "temp": 24,
        "feelsLike": 26,
        "condition": "Sunny",
        "icon": "sunny",
        "humidity": 55,
        "windSpeed": 10,
        "pressure": 1015,
        "visibility": 12
      },
      "forecast": [
        { "day": "Mon", "high": 26, "low": 20, "condition": "Sunny", "icon": "sunny" },
        { "day": "Tue", "high": 27, "low": 21, "condition": "Sunny", "icon": "sunny" },
        { "day": "Wed", "high": 25, "low": 19, "condition": "Partly Cloudy", "icon": "partly-cloudy" },
        { "day": "Thu", "high": 24, "low": 18, "condition": "Cloudy", "icon": "cloudy" },
        { "day": "Fri", "high": 26, "low": 20, "condition": "Sunny", "icon": "sunny" }
      ],
      "alerts": []
    }
  ]
}
```

---

## Bonus Challenges:

### For All Exercises:
1. Implement proper error handling
2. Add loading states with skeletons
3. Make it responsive (mobile-first)
4. Add animations/transitions
5. Implement accessibility features (ARIA labels, keyboard navigation)
6. Use custom pipes for data transformation
7. Create reusable components
8. Add unit tests for components and services
9. Use route guards where appropriate
10. Implement lazy loading for routes

### Advanced Concepts to Practice:
- Signals and computed signals
- RxJS operators (map, filter, switchMap, debounceTime)
- Reactive forms with custom validators
- Dynamic forms
- Content projection (ng-content)
- ViewChild and ContentChild
- Custom directives
- Interceptors for HTTP requests
- State management patterns
- Performance optimization (OnPush, trackBy)
