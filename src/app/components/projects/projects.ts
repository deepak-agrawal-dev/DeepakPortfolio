import { Component, computed, signal } from '@angular/core';
import { Reveal } from '../../shared/directives/reveal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
  {
    id: 1,
    title: 'Dev Tool Store',
    description: 'Responsive developer marketplace with product listing, cart management, theme switching, and authentication flow.',
    category: 'UI',
    image: 'https://res.cloudinary.com/dwjoms8mk/image/upload/v1778609229/app-store_wgcchu.png',
    techStack: ['Angular', 'Angular Material', 'Bootstrap', 'JSON Server'],
    github: 'https://github.com/talktome3449/DevToolStoreEcomApp',
    demo: 'https://dev-tool-store-ecom-app.vercel.app/',
    featured: false,
    /* metrics: [
      { value: '20+', label: 'Components' },
      { value: '5+', label: 'Modules' }
    ] */
  },
  {
    id: 2,
    title: 'Multi-Tenant Dashboard',
    description: 'Enterprise-grade dashboard for managing tenants, analytics, charts, and role-based application modules.',
    category: 'Angular',
    image: 'https://res.cloudinary.com/dwjoms8mk/image/upload/v1778609229/dashboard_hzs8o8.png',
    techStack: ['Angular', 'Angular Material', 'Node.js', 'Chart.js'],
    github: 'https://github.com/talktome3449/Multi-Tenant-Dashboard',
    demo: 'https://multi-tenant-dashboard-ecru.vercel.app/',
    featured: false
  },
  {
    id: 3,
    title: 'Tenant Management System',
    description: 'Built scalable tenant management workflows with modular architecture and reusable UI components.',
    category: 'Angular',
    image: 'https://res.cloudinary.com/dwjoms8mk/image/upload/v1778646049/dashboard-2_lhs7ry.png',
    techStack: ['Angulat', 'Node.js', 'REST API', 'Chart.js'],
    github: 'https://github.com/talktome3449/Multi-Tenant-Dashboard',
    demo: 'https://multi-tenant-dashboard-ecru.vercel.app/',
    featured: false
  },
  {
    id: 4,
    title: 'Authentication System',
    description: 'Authentication module featuring login flow, protected routes, role-based navigation, and session handling.',
    category: 'Angular',
    image: 'https://res.cloudinary.com/dwjoms8mk/image/upload/v1778646049/app-store-2png_vpt4gn.png',
    techStack: ['Angular', 'Auth Guard', 'Node.js', 'LocalStorage'],
    github: 'https://github.com/talktome3449/DevToolStoreEcomApp',
    demo: 'https://dev-tool-store-ecom-app.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'Health Care',
    description: 'Dynamic charts with real-time updates',
    category: 'React',
    image: '',
    techStack: ['Angular', 'Node.js', 'Bootstrap'],
    github: '#',
    demo: '#',
    featured: true
  }
];

// ✅ Categories list
  categories = [
  'All',
  ...new Set(this.projects.map(p => p.category))
];

  // ✅ Selected category (Signal)
  selectedCategory = signal<string>('All');

  // ✅ Filter logic
  filteredProjects = computed(() => {
    if (this.selectedCategory() === 'All') {
      return this.projects.filter(p => !p.featured);
    }
    return this.projects.filter(
      p => p.category === this.selectedCategory() && !p.featured
    );
  });
}
