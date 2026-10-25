/*
  НАСТРОЙКИ САЙТА
  Здесь можно поменять телефон, часы работы, реквизиты и ссылки.
  Меняйте только текст в кавычках. Расписание — в файле raspisanie.txt, новости — в novosti.txt.
*/
window.SITE = {
  name: "Покровский храм",
  place: "в Черкизово",
  phone: "+7 (925) 597-16-96", // дежурный по храму / церковная лавка
  phoneLink: "+79255971696",
  email: "hram-pokrov.p.ch@yandex.ru",
  address: "Московская область, городской округ Пушкинский, пос. Черкизово, ул. Кедрина, д. 6",
  addressShort: "пос. Черкизово, ул. Кедрина, 6",
  mapLink: "https://yandex.ru/maps/?text=%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D1%85%D1%80%D0%B0%D0%BC%20%D0%A7%D0%B5%D1%80%D0%BA%D0%B8%D0%B7%D0%BE%D0%B2%D0%BE%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9A%D0%B5%D0%B4%D1%80%D0%B8%D0%BD%D0%B0%206",
  openHours: "7:00–17:00",

  vk: "https://vk.com/pokrovcher",
  vkGroup: "pokrovcher",
  vkApi: false,

  formsEmail: false,
  whatsappPhone: "79255971696",
  telegram: "https://t.me/joinchat/AAAAAEuZ4Wog938JficSIg",
  youtube: "https://www.youtube.com/channel/UCRz6eMpAgrefzJj7QEVMgFg",

  // Реквизиты прихода (для QR-кода оплаты в приложении банка)
  bank: {
    name: "МРО Православный приход Покровского храма пос. Черкизово",
    inn: "5038005494",
    kpp: "503801001",
    account: "40703810840170110374",
    bankName: "ПАО Сбербанк",
    bic: "044525225",
    corr: "30101810400000000225",
    purpose: "Пожертвование на уставную деятельность"
  },

  // Ссылка на оплату картой. Пока пусто — кнопка не показывается.
  cardPaymentUrl: ""
};
