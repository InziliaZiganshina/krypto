document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявление функции
      const el = document.querySelector('.follow-cursor') // поиск элемента, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяется, где находится курсор
        if (!target) return
  
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляется активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляется активный класс
        }
  
        el.style.left = e.pageX + 'px' //элементу задается позиционирование слева
        el.style.top = e.pageY + 'px' //элементу задается позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor
  
  })

  const menuBtn = document.querySelector('.menu__btn');
  const menuMobile = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
  });
  