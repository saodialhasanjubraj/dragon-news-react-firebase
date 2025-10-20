project-root/
│
├── public/
│ ├── favicon.ico
│ ├── logo192.png
│ ├── logo512.png
│ ├── robots.txt
│ ├── sitemap.xml
│ ├── manifest.json
│ └── \_redirects # For SPA routing on hosting
│
├── firebase/ # Firebase config (optional separate folder)
│ ├── .firebaserc
│ ├── firebase.json
│ ├── firestore.rules
│ ├── firestore.indexes.json
│ └── storage.rules
│
├── src/
│ │
│ ├── config/ # Configuration files
│ │ ├── firebase.config.js # Firebase initialization
│ │ ├── constants.js # App constants
│ │ ├── routes.config.js # Route paths
│ │ └── env.config.js # Environment variables
│ │
│ ├── firebase/ # Firebase services
│ │ ├── auth/
│ │ │ ├── authService.js # Authentication methods
│ │ │ ├── authProvider.js # Social auth providers
│ │ │ └── authHelpers.js # Auth utility functions
│ │ │
│ │ ├── firestore/
│ │ │ ├── firestoreService.js # Firestore CRUD operations
│ │ │ ├── collections.js # Collection references
│ │ │ ├── queries.js # Common queries
│ │ │ └── converters.js # Data type converters
│ │ │
│ │ ├── storage/
│ │ │ ├── storageService.js # File upload/download
│ │ │ ├── imageService.js # Image handling
│ │ │ └── fileHelpers.js # File utilities
│ │ │
│ │ ├── functions/
│ │ │ ├── callableService.js # Callable functions
│ │ │ └── functionHelpers.js # Function utilities
│ │ │
│ │ └── analytics/
│ │ ├── analyticsService.js # Firebase Analytics
│ │ └── eventTracking.js # Custom event tracking
│ │
│ ├── components/ # Reusable components
│ │ │
│ │ ├── common/ # Generic components
│ │ │ ├── Button/
│ │ │ │ ├── Button.jsx
│ │ │ │ ├── Button.test.jsx
│ │ │ │ └── index.js
│ │ │ ├── Input/
│ │ │ ├── Card/
│ │ │ ├── Modal/
│ │ │ ├── Drawer/
│ │ │ ├── Dropdown/
│ │ │ ├── Tooltip/
│ │ │ ├── Badge/
│ │ │ ├── Avatar/
│ │ │ ├── Skeleton/
│ │ │ ├── Spinner/
│ │ │ ├── Alert/
│ │ │ ├── Toast/
│ │ │ ├── Pagination/
│ │ │ ├── Table/
│ │ │ ├── Tabs/
│ │ │ └── Accordion/
│ │ │
│ │ ├── forms/ # Form components
│ │ │ ├── FormInput/
│ │ │ ├── FormTextarea/
│ │ │ ├── FormSelect/
│ │ │ ├── FormCheckbox/
│ │ │ ├── FormRadio/
│ │ │ ├── FormDatePicker/
│ │ │ ├── FormFileUpload/
│ │ │ ├── FormImageUpload/
│ │ │ └── FormValidation/
│ │ │
│ │ ├── layout/ # Layout components
│ │ │ ├── Header/
│ │ │ │ ├── Header.jsx
│ │ │ │ ├── Navigation.jsx
│ │ │ │ ├── UserMenu.jsx
│ │ │ │ └── MobileMenu.jsx
│ │ │ ├── Footer/
│ │ │ │ ├── Footer.jsx
│ │ │ │ ├── FooterLinks.jsx
│ │ │ │ └── Newsletter.jsx
│ │ │ ├── Sidebar/
│ │ │ │ ├── Sidebar.jsx
│ │ │ │ └── SidebarMenu.jsx
│ │ │ ├── Breadcrumbs/
│ │ │ └── Container/
│ │ │
│ │ ├── auth/ # Authentication components
│ │ │ ├── LoginForm/
│ │ │ ├── RegisterForm/
│ │ │ ├── ForgotPassword/
│ │ │ ├── ResetPassword/
│ │ │ ├── EmailVerification/
│ │ │ ├── SocialLogin/
│ │ │ └── AuthModal/
│ │ │
│ │ ├── dashboard/ # Dashboard components
│ │ │ ├── DashboardCard/
│ │ │ ├── StatsCard/
│ │ │ ├── ChartWidget/
│ │ │ ├── RecentActivity/
│ │ │ ├── QuickActions/
│ │ │ └── NotificationsWidget/
│ │ │
│ │ ├── profile/ # Profile components
│ │ │ ├── ProfileCard/
│ │ │ ├── ProfileSettings/
│ │ │ ├── AvatarUpload/
│ │ │ ├── PasswordChange/
│ │ │ └── AccountSettings/
│ │ │
│ │ ├── products/ # Product components
│ │ │ ├── ProductCard/
│ │ │ ├── ProductGrid/
│ │ │ ├── ProductList/
│ │ │ ├── ProductFilter/
│ │ │ ├── ProductSearch/
│ │ │ └── ProductDetails/
│ │ │
│ │ ├── cart/ # Shopping cart components
│ │ │ ├── CartItem/
│ │ │ ├── CartSummary/
│ │ │ ├── CartDrawer/
│ │ │ └── CheckoutStepper/
│ │ │
│ │ ├── notifications/ # Notification components
│ │ │ ├── NotificationBell/
│ │ │ ├── NotificationItem/
│ │ │ └── NotificationPanel/
│ │ │
│ │ └── chat/ # Chat components (if needed)
│ │ ├── ChatWindow/
│ │ ├── MessageList/
│ │ ├── MessageInput/
│ │ └── UserList/
│ │
│ ├── pages/ # Page components
│ │ │
│ │ ├── Home/
│ │ │ ├── Home.jsx
│ │ │ ├── HeroSection.jsx
│ │ │ ├── FeaturesSection.jsx
│ │ │ ├── TestimonialsSection.jsx
│ │ │ └── CTASection.jsx
│ │ │
│ │ ├── Auth/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ ├── ForgotPassword.jsx
│ │ │ ├── ResetPassword.jsx
│ │ │ └── VerifyEmail.jsx
│ │ │
│ │ ├── Dashboard/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Overview.jsx
│ │ │ ├── Analytics.jsx
│ │ │ └── Settings.jsx
│ │ │
│ │ ├── Profile/
│ │ │ ├── Profile.jsx
│ │ │ ├── EditProfile.jsx
│ │ │ ├── Security.jsx
│ │ │ └── Preferences.jsx
│ │ │
│ │ ├── Products/
│ │ │ ├── ProductsPage.jsx
│ │ │ ├── ProductDetail.jsx
│ │ │ ├── CreateProduct.jsx
│ │ │ └── EditProduct.jsx
│ │ │
│ │ ├── Orders/
│ │ │ ├── OrdersPage.jsx
│ │ │ ├── OrderDetail.jsx
│ │ │ └── OrderHistory.jsx
│ │ │
│ │ ├── Cart/
│ │ │ ├── CartPage.jsx
│ │ │ └── Checkout.jsx
│ │ │
│ │ ├── About/
│ │ │ └── About.jsx
│ │ │
│ │ ├── Contact/
│ │ │ └── Contact.jsx
│ │ │
│ │ ├── Blog/
│ │ │ ├── BlogList.jsx
│ │ │ ├── BlogPost.jsx
│ │ │ └── CreatePost.jsx
│ │ │
│ │ ├── Admin/
│ │ │ ├── AdminDashboard.jsx
│ │ │ ├── UserManagement.jsx
│ │ │ ├── ContentManagement.jsx
│ │ │ └── SystemSettings.jsx
│ │ │
│ │ └── Error/
│ │ ├── NotFound.jsx
│ │ ├── Unauthorized.jsx
│ │ ├── ServerError.jsx
│ │ └── ErrorBoundary.jsx
│ │
│ ├── hooks/ # Custom React hooks
│ │ ├── useAuth.js # Authentication hook
│ │ ├── useFirestore.js # Firestore operations hook
│ │ ├── useFirestoreQuery.js # Firestore query hook
│ │ ├── useFirestoreDoc.js # Single document hook
│ │ ├── useFirestoreCollection.js # Collection hook
│ │ ├── useStorage.js # Firebase Storage hook
│ │ ├── useImageUpload.js # Image upload hook
│ │ ├── useFileUpload.js # File upload hook
│ │ ├── useRealtime.js # Real-time updates hook
│ │ ├── useForm.js # Form handling hook
│ │ ├── useValidation.js # Form validation hook
│ │ ├── useDebounce.js # Debounce hook
│ │ ├── useLocalStorage.js # Local storage hook
│ │ ├── useClickOutside.js # Click outside hook
│ │ ├── useWindowSize.js # Window size hook
│ │ ├── useMediaQuery.js # Media query hook
│ │ ├── useInfiniteScroll.js # Infinite scroll hook
│ │ ├── usePagination.js # Pagination hook
│ │ └── useToast.js # Toast notification hook
│ │
│ ├── context/ # React Context providers
│ │ ├── AuthContext.jsx # Authentication context
│ │ ├── ThemeContext.jsx # Theme context (dark/light)
│ │ ├── CartContext.jsx # Shopping cart context
│ │ ├── NotificationContext.jsx # Notifications context
│ │ ├── ModalContext.jsx # Modal management context
│ │ └── LanguageContext.jsx # i18n context
│ │
│ ├── routes/ # Routing configuration
│ │ ├── index.jsx # Main router setup
│ │ ├── PublicRoute.jsx # Public route wrapper
│ │ ├── PrivateRoute.jsx # Protected route wrapper
│ │ ├── AdminRoute.jsx # Admin-only route wrapper
│ │ └── routes.config.js # Route constants
│ │
│ ├── utils/ # Utility functions
│ │ ├── helpers.js # General helper functions
│ │ ├── validators.js # Validation functions
│ │ ├── formatters.js # Data formatting
│ │ ├── errorHandler.js # Error handling utilities
│ │ ├── dateUtils.js # Date utilities
│ │ ├── stringUtils.js # String utilities
│ │ ├── arrayUtils.js # Array utilities
│ │ ├── imageUtils.js # Image processing
│ │ └── analytics.js # Analytics utilities
│ │
│ ├── styles/ # Global styles
│ │ ├── index.css # Main CSS file
│ │ ├── tailwind.css # Tailwind imports
│ │ ├── variables.css # CSS variables
│ │ ├── animations.css # Custom animations
│ │ └── components.css # Component-specific styles
│ │
│ ├── constants/ # Constants
│ │ ├── index.js # Main constants export
│ │ ├── apiConstants.js # API constants
│ │ ├── routeConstants.js # Route paths
│ │ ├── themeConstants.js # Theme constants
│ │ └── validationConstants.js # Validation rules
│ │
│ ├── types/ # TypeScript types (if using TS)
│ │ ├── user.types.ts
│ │ ├── product.types.ts
│ │ ├── order.types.ts
│ │ └── common.types.ts
│ │
│ ├── i18n/ # Internationalization
│ │ ├── config.js # i18n configuration
│ │ ├── locales/
│ │ │ ├── en.json
│ │ │ ├── es.json
│ │ │ └── fr.json
│ │ └── index.js
│ │
│ ├── tests/ # Test files
│ │ ├── setup.js # Test setup
│ │ ├── mocks/ # Mock data
│ │ ├── unit/ # Unit tests
│ │ ├── integration/ # Integration tests
│ │ └── e2e/ # End-to-end tests
│ │
│ ├── App.jsx # Main App component
│ ├── main.jsx # Entry point
│ └── index.css # Global styles import
│
├── .env # Environment variables (gitignored)
├── .env.example # Example env file
├── .env.development # Development env
├── .env.production # Production env
├── .gitignore # Git ignore file
├── .eslintrc.js # ESLint configuration
├── .prettierrc # Prettier configuration
├── firebase.json # Firebase configuration
├── .firebaserc # Firebase project config
├── firestore.rules # Firestore security rules
├── firestore.indexes.json # Firestore indexes
├── storage.rules # Storage security rules
├── package.json # Dependencies
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS configuration
├── vite.config.js # Vite configuration
└── README.md # Project documentation
# dragon-news-react-firebase
