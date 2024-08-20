import calendar from './assets/calendar.png';
import check from './assets/check.png';
import sun from './assets/sun.png';
import suns from './assets/suns.png';

export const data = {
  minRequest: 656,
  maxRequest: 100_000,
  titleName: 'ЖК NOVA',
  titleType: 'Жилая недвижимость',
  titlePeriod: '3 года',
  p1: 'Цифровые квадратные метры жилой недвижимости — это инвестиции в индексное значение стоимости квадратного метра в соответствующем жилом комплексе.',
  p2: 'Покупая Цифровые квадратные метры жилой недвижимости, вы получаете участие в динамике стоимости жилой недвижимости, рассчитываемой на основании цен по заключенным и зарегистрированным договорам долевого участия (ДДУ).',
  p3: 'Цифровые квадратные метры жилой недвижимости – это инновационный продукт, выпускаемый в формате ЦФА.',
  cfaNumber: 'SMLT-1-DTD-092024-00073',
  cfaPrice: '7000 ₽',
  cfaPriceNumber: 7000,
  cfaVolume: 'от 70 000 000 ₽ до 700 000 000 ₽',
  cfaVolumeM2: 'от 100 м2 до 1 000 м2',
  cfaPeriodPayment: 'В конце срока',
  cfaDuration: '3 года',
  hideSellDate: false,

  imgRows: [
    {
      title: 'Элитная недвижимость',
      subtitle: 'Флагманский проект крупного девелопера',
      img: sun,
    },
    {
      title: 'Ожидаемая доходность',
      subtitle: '20 - 22% годовых',
      img: suns,
    },
    {
      title: 'Комфортный срок',
      subtitle: 'Срок инвестиций — 3 года',
      img: calendar,
    },
    {
      title: 'Качественный кредитный риск',
      subtitle: 'Рейтинг эмитента по версии АКРА A-(RU)',
      img: check,
    },
  ],
  emitment: 'ПАО «ГК «САМОЛЕТ»',
  address: 'ул Липовой Рощи, д. 1, к. 3, помещ. 18, ком. 3, г Красногорск, Московская Область, 143082',
  site: 'https://samolet.ru/',
};
