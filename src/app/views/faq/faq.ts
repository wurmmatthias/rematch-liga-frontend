import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Accordion } from '../../components/accordion/accordion';
import { Button } from '../../components/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [Hero, Accordion, Button, CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
faq = [
  {
    frage: "Was ist dieses Projekt / Produkt?",
    antwort: "Unser Produkt ist eine webbasierte Plattform, mit der Sie Aufgaben effizient verwalten, Projekte organisieren und in Teams zusammenarbeiten können – alles an einem Ort."
  },
  {
    frage: "Was ist dieses Projekt / Produkt?",
    antwort: "Unser Produkt ist eine webbasierte Plattform, mit der Sie Aufgaben effizient verwalten, Projekte organisieren und in Teams zusammenarbeiten können – alles an einem Ort."
  },
  {
    frage: "Was ist dieses Projekt / Produkt?",
    antwort: "Unser Produkt ist eine webbasierte Plattform, mit der Sie Aufgaben effizient verwalten, Projekte organisieren und in Teams zusammenarbeiten können – alles an einem Ort."
  }
];
}
