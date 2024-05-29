import React, { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';

import '../styles/blocks/ReservationForm.scss';

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const [ submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const filteredValue = value.replace(/\D/g, '');
    
      setFormData({
        ...formData,
        phone: filteredValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    setErrors({
      fullName: '',
      email: '',
      phone: ''
    });

    setSubmitted(false);
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.fullName) {
      valid = false;
      errors.fullName = 'Прізвище та ім\'я є обов\'язковими';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      valid = false;
      errors.email = 'Електронна адреса є обов\'язковою';
    } else if (!emailPattern.test(formData.email)) {
      valid = false;
      errors.email = 'Введіть дійсну електронну адресу';
    }

    const phonePattern = /^\+?\d{10,15}$/;
    if (!formData.phone) {
      valid = false;
      errors.phone = 'Номер телефону є обов\'язковим';
    } else if (!phonePattern.test(formData.phone)) {
      valid = false;
      errors.phone = 'Введіть дійсний номер телефону';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: ''
      });

      alert('Дякуємо! Дані відправлено!');
    }
  };

  return (
    <section className='reservation-form'>
      <h2 className='reservation-form__title'>Забронювати місце на курсі</h2>

      <p className='reservation-form__subtitle'>
        Заповніть форму та переходьте до вибору зручного пакета участі
      </p>

      <form>
        <div>
          <input
            className='reservation-form__input'
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Ваше ім'я та прізвище"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className='reservation-form__error'>{errors.fullName}</p>}
        </div>

        <div>
          <input
            className='reservation-form__input'
            type="email"
            id="email"
            name="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className='reservation-form__error'>{errors.email}</p>}
        </div>

        <div>
          <input
            className='reservation-form__input reservation-form__input--phone'
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className='reservation-form__error'>{errors.phone}</p>}
        </div>

        {submitted && <p className='reservation-form__error'>Дякуємо! Дані відправлено!</p>}

        <div className='reservation-form__button'>
          <PrimaryButton type='purple' title='Записатися на курс' handleClick={handleSubmit} />
        </div>

        <p className='reservation-form__seats'>
          Залишилось 5 місць із 25
        </p>

        <p className='reservation-form__agreement'>
          Натискаючи на кнопку, я погоджуюсь на обробку персональних даних
        </p>
      </form>

      <div className='reservation-form__discount'>
        <p className='reservation-form__discount-value'>
          Знижки до
          <br />
          <span className='reservation-form__discount-value--large'>-50 %</span>
          <br />
          на навчання
        </p>
      </div>
    </section>
  );
};
