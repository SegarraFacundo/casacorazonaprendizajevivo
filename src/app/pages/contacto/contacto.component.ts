import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  formData!: FormGroup;

  cargando: boolean = false;

  constructor(
    private builder: FormBuilder,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.iniciarFormContacto();
  }

  private iniciarFormContacto(): void {
    this.formData = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    })
  }

  onSubmit(formData: any) {
    this.formData.markAllAsTouched();

    if (this.formData.invalid)
      return;
    this.cargando = true;
    this.emailService.SendEmail(formData)
      .subscribe({
        next: response => {
          console.log('entro')
          this.cargando = false;
          location.href = 'https://mailthis.to/confirm'
          this.iniciarFormContacto();

        }, error: (error) => {
          this.cargando = false;
          console.warn(error.responseText)
          console.log({ error })
        }
      })
  }
}
