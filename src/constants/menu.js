const MENU_ITEMS = [
	{ key: 'navigation', label: 'Navigation', isTitle: true },
	{
		key: 'apps-ecommerc',
		label: 'Dashboards',
		isTitle: false,
		icon: 'uil-home-alt',
		children: [
			{
				key: 'ecommerce-prod',
				label: 'Dashboard',
				// url: '/dashboard/analytics',
				parentKey: 'apps-ecommerc',
			},
			{
				key: 'ecommerce-products',
				label: 'Dashboard 2',
				url: '/apps/ecommerce/customers',
				parentKey: 'apps-ecommerc',
			},
			{
				key: 'ecommerce-detail',
				label: 'Deep insights',
				// url: '/dashboard/project',
				parentKey: 'apps-ecommerc',
			},
			{
				key: 'ecommerce-product',
				label: 'Dashboard GUI',
				// url: '/dashboard/e-wallet',
				parentKey: 'apps-ecommerc',
				badge: { variant: 'success', text: 'Beta' },
			},
		],
	},

	{
		key: 'User',
		label: 'User',
		isTitle: false,
		icon: 'mdi mdi-account',
		children: [
			{
				key: 'ds-analytics',
				label: 'User Accounts',
				// url: '/dashboard/analytics',
				parentKey: 'dashboards',
			},
			{
				key: 'ds-ecommerce',
				label: 'User Device History',
				// url: '/dashboard/ecommerce',
				parentKey: 'dashboards',
			},
			{
				key: 'ds-project',
				label: 'User Accounts 2.0',
				// url: '/dashboard/project',
				parentKey: 'dashboards',
			},
			{
				key: 'ds-ewallet',
				label: 'User Apps Tracking',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'User Referral',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'User Call Logs (Adv)',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'Reports',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'User Logs (Adv)',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'User Logs',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'User Relogin',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'User Payment Logs',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'User Payment Logs 2.0',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},
			{
				key: 'ds-ewallet',
				label: 'Expire Users',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},

			{
				key: 'ds-ewallet',
				label: 'User Subscriptions',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',

			},

			{
				key: 'ds-ewallet',
				label: 'User Trash',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',
				// badge: { variant: 'danger', text: 'New' },
			},
			{
				key: 'ds-ewallet',
				label: 'Compose Sms',
				// url: '/dashboard/e-wallet',
				parentKey: 'dashboards',
				// badge: { variant: 'danger', text: 'New' },
			},


		],
	},
	{
		key: 'apps-email',
		label: 'Onboarding',
		isTitle: false,
		icon: 'mdi mdi-account-arrow-right',
	},

	{
		key: 'User Distribution',
		label: 'User Distribution',
		isTitle: false,
		icon: 'mdi mdi-account-group',
		children: [
			{
				key: 'email-inbox',
				label: 'User Distribution',
				// url: '/apps/email/inbox',
				parentKey: 'apps-email',
			},
			{
				key: 'email-read-email',
				label: 'User Distribution 2.0',
				// url: '/apps/email/details',
				parentKey: 'apps-email',
			},
			{
				key: 'email-read-email',
				label: 'User Distribution 3.0',
				// url: '/apps/email/details',
				parentKey: 'apps-email',
			},
		],
	},
	{
		key: 'Executive',
		label: 'Executive',
		isTitle: false,
		icon: 'mdi mdi-account-tie',
		children: [
			{
				key: 'email-inbox',
				label: 'Executive Notes',
				// url: '/apps/email/inbox',
				parentKey: 'apps-email',
			},
			{
				key: 'email-read-email',
				label: 'Executive Tasks',
				// url: '/apps/email/details',
				parentKey: 'apps-email',
			},
		],
	},
	{
		key: 'Developer',
		label: 'Developer',
		isTitle: false,
		icon: 'mdi mdi-account-star',
		children: [
			{
				key: 'project-list',
				label: 'Dev App Version(Old)',
				// url: '/apps/projects/list',
				parentKey: 'apps-projects',
			},
			{
				key: 'project-details',
				label: 'Dev App Version(New)',
				// url: '/apps/projects/details',
				parentKey: 'apps-projects',
			},
			{
				key: 'project-gantt',
				label: 'Flyers',
				// url: '/apps/projects/gantt',
				// badge: { variant: 'light', text: 'New' },
				parentKey: 'apps-projects',
			},
			{
				key: 'project-create-project',
				label: 'Dev Policy Lookup',
				// url: '/apps/projects/new',
				parentKey: 'apps-projects',
			},
			{
				key: 'project-create-project',
				label: 'Portal Health',
				// url: '/apps/projects/new',
				parentKey: 'apps-projects',
			},
		],
	},
	{
		key: 'apps-social',
		label: 'Pricing Plan',
		isTitle: false,
		icon: 'mdi mdi-cash-multiple',
		// url: '/apps/social',
	},
	{
		key: 'Reseller',
		label: 'Reseller',
		isTitle: false,
		icon: 'mdi mdi-account-multiple-plus',
		children: [
			{
				key: 'task-list',
				label: 'Reseller Accounts',
				// url: '/apps/tasks/list',
				parentKey: 'apps-tasks',
			},
			{
				key: 'task-details',
				label: 'Reseller Activation',
				// url: '/apps/tasks/details',
				parentKey: 'apps-tasks',
			},

		],
	},
	{
		key: 'Billing',
		label: 'Billing',
		isTitle: false,
		icon: 'uil-bill',
		children: [
			{
				key: 'task-list',
				label: 'Billing Account(Adv)',
				// url: '/apps/tasks/list',
				parentKey: 'apps-tasks',
			},
			{
				key: 'task-details',
				label: 'Billing Account',
				// url: '/apps/tasks/details',
				parentKey: 'apps-tasks',
			},

		],
	},
	{
		key: 'Administrator',
		label: 'Administrator',
		isTitle: false,
		icon: 'mdi mdi-account-cog',
		children: [
			{
				key: 'task-list',
				label: 'Panel User',
				// url: '/apps/tasks/list',
				parentKey: 'apps-tasks',
			},
			{
				key: 'task-details',
				label: 'panel Access Logs',
				// url: '/apps/tasks/details',
				parentKey: 'apps-tasks',
			},

		],
	},
	{
		key: 'Finance',
		label: 'Finance',
		isTitle: false,
		icon: 'mdi mdi-finance',
		children: [
			{
				key: 'task-list',
				label: 'Employee Payslip',
				// url: '/apps/tasks/list',
				parentKey: 'apps-tasks',
			},


		],
	},
	{
		key: 'user Ticket',
		label: 'user Ticket',
		isTitle: false,
		icon: 'mdi mdi-ticket-account',
		children: [
			{
				key: 'project-list',
				label: 'User Tickets',
				// url: '/apps/projects/list',
				parentKey: 'apps-projects',
			},
			{
				key: 'project-details',
				label: 'User Issues',
				// url: '/apps/projects/details',
				parentKey: 'apps-projects',
			},
			{
				key: 'project-gantt',
				label: 'Assigned To Me',
				// url: '/apps/projects/gantt',
				parentKey: 'apps-projects',
			},
			{
				key: 'project-create-project',
				label: ' User Ticket Notes',
				// url: '/apps/projects/new',
				parentKey: 'apps-projects',
			},
			{
				key: 'project-create-project',
				label: 'Ticket Settings',
				// url: '/apps/projects/new',
				parentKey: 'apps-projects',
			},
		],
	},
	{
		key: 'apps-social',
		label: 'notification',
		isTitle: false,
		icon: 'uil-comment-alt-notes',
		url: '/apps/social',
	},


];

export default MENU_ITEMS;
