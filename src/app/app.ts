import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Home, About, Skills, Education, Projects, Experience, Contact, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  isMobile = false;
  isSidebarOpen = false;
  activeSection = 'home';

  theme: string = 'dark';

  ngOnInit() {
    window.scrollTo(0, 0);
    this.checkScreen();
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnChanges() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 992;
  }

  getThemeName = ($event: boolean) => {
    return $event ? (this.theme = 'dark') : (this.theme = 'light');
  }
  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  showPopup = false;

  toggleTheme() {
  this.theme = this.theme === 'dark' ? 'light' : 'dark';
}

  @HostListener('window:scroll', [])
onScroll() {

  const sections = ['home','about','experience','projects','skills','education','contact'];

  for (let sec of sections) {
    const el = document.getElementById(sec);
    if (!el) continue;

    const rect = el.getBoundingClientRect();

    if (rect.top <= 150 && rect.bottom >= 150) {
      this.activeSection = sec;
      break;
    }
  }
}
  
}
