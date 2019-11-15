import { Component, OnInit } from '@angular/core'
import { UseCase } from '../usecase.model'

@Component({
  selector: 'app-about-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.scss']
})
export class UsecasesComponent implements OnInit {
  readonly PLAIN_USER = 'Reguliere gebruiker'
  readonly ADMIN_USER = 'Administrator'

  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'Inloggen',
      description: 'Hiermee logt een bestaande gebruiker in.',
      scenario: [
        'Admin vult email en password in en klikt op Login knop.',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: this.ADMIN_USER,
      precondition: 'Geen',
      postcondition: 'De actor is ingelogd'
    },
    {
      id: 'UC-02',
      name: 'Details film bekijken',
      description: 'Hiermee kan een gebruiker details zien van een film',
      scenario: ['Gebruiker klikt op films tap', 'Gebruiker klikt op een film'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'De gebruiker ziet het detail scherm van de film'
    },
    {
      id: 'UC-03',
      name: 'Film toevoegen',
      description: 'Hiermee voegt de admin een film toe',
      scenario: ['Admin gaat naar film tap', 'Admin klikt op add movie tab', 'Admin voegt gegevens van de film toe en saved de film'],
      actor: this.ADMIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Nieuwe film is toegevoegd'
    },
    {
      id: 'UC-04',
      name: 'Films bekijken',
      description: 'Hiermee kan een gebruiker alle films zien',
      scenario: ['Gebruiker klikt op films tap'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'De gebruiker kan alle films zien'
    },
    {
      id: 'UC-05',
      name: 'Film voorstelling bekijken',
      description: 'Hiermee kan een gebruiker alle films zien',
      scenario: ['Gebruiker klikt op voorstellingen tap', 'Gebruiker klikt op een tijd van een film'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'De gebruiker ziet de tijd en film van de voorstelling'
    }

  ]

  constructor() {}

  ngOnInit() {}
}
