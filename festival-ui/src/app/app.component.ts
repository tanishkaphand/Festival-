import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Festival } from './models/festival';
import { FestivalService } from './services/festival.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Festival Management System';

  festivals: Festival[] = [];

  newFestival: Festival = {
    name: '',
    location: '',
    date: ''
  };

  constructor(private api: FestivalService) {}

  ngOnInit(): void {
    // Load previous theme
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark-mode');
    }
    this.loadFestivals();
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
  }

  async loadFestivals(): Promise<void> {
    this.api.list().subscribe({
      next: (data) => (this.festivals = data ?? []),
      error: (err) => console.error('Failed to load festivals', err)
    });
  }

  onSubmit(): void {
    if (!this.newFestival.name || !this.newFestival.location || !this.newFestival.date) {
      return;
    }
    this.api.create(this.newFestival).subscribe({
      next: () => {
        this.newFestival = { name: '', location: '', date: '' };
        this.loadFestivals();
      },
      error: (err) => console.error('Failed to add festival', err)
    });
  }
}
