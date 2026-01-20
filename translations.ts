
import { Language } from './types';

export const translations: Record<Language, any> = {
  en: {
    nav: { about: 'Steps', services: 'Styles', calculator: 'Price', contact: 'Chat' },
    hero: {
      title: 'Build a New Home. Skip the Stress.',
      subtitle: 'We find the land, get the loan, design the house, and build it. You just move in. Simple as that.',
      cta: 'Start Building'
    },
    badCredit: "Bad Credit? No Problem. We help you get approved.",
    steps: {
      title: 'How It Works',
      step1: { title: 'STRATEGY & LOAN', desc: 'We secure financing solutions even for complex credit profiles.' },
      step2: { title: 'LAND SCOUTING', desc: 'Our agents find the perfect lot in your desired Chicago suburb.' },
      step3: { title: 'DESIGN & PERMITS', desc: 'Architectural planning and handling all City Hall approvals.' },
      step4: { title: 'BUILD PHASE', desc: 'High-quality, fixed-price construction with zero surprises.' },
      step5: { title: 'MOVE IN & GAIN', desc: 'Step into your dream home with instant equity and peace of mind.' }
    },
    calculator: {
      title: 'How Much?',
      area: 'House Size',
      quality: 'Style Level',
      total: 'Estimated Total'
    },
    digitalTwin: {
      tag: 'Engineering Perfection',
      title: 'Home Plan:',
      titleAccent: 'Digital Twin',
      desc: "We don't just build walls. We create a full digital model of your future home. From architectural blueprints to the smallest interior details — you see it all before the work begins.",
      cta: 'View Project Details',
      phase: 'Phase: Precision Planning'
    },
    markers: {
      title: "What's Inside Your Home?",
      subtitle: "Hover over the points to see the useful programs and technologies we implement in every project.",
      learnMore: "Learn More",
      green: {
        title: "Green Program",
        desc: "Installation of solar panels and energy storage systems. Get up to 30% compensation from the state for eco-home construction.",
        badge: "Federal Credit"
      },
      plan: {
        title: "Your Home Plan",
        desc: "We create a digital twin of the house. Every square meter is optimized for your family even before construction begins.",
        badge: "Smart Layout"
      },
      security: {
        title: "Security System",
        desc: "Built-in smart cameras and intrusion sensors. Full control of your territory from anywhere in the world via smartphone.",
        badge: "Safe & Secure"
      },
      climate: {
        title: "Climate Control",
        desc: "Ventilation system with air recuperation. Fresh air without heat loss even in the harshest Chicago winters.",
        badge: "Eco-Air"
      }
    }
  },
  uk: {
    nav: { about: 'Кроки', services: 'Стилі', calculator: 'Ціна', contact: 'Зв’язок' },
    hero: {
      title: 'Збудуй новий дім. Без стресу.',
      subtitle: 'Ми знайдемо землю, оформимо кредит, зробимо дизайн і збудуємо. Ви просто заїжджаєте. Легко.',
      cta: 'Почати будівництво'
    },
    badCredit: "Погана кредитна історія? Не проблема. Ми допоможемо.",
    steps: {
      title: 'Як це працює',
      step1: { title: 'СТРАТЕГІЯ ТА КРЕДИТ', desc: 'Ми забезпечуємо рішення щодо фінансування навіть для складних кредитних профілів.' },
      step2: { title: 'ПОШУК ЗЕМЛІ', desc: 'Наші агенти знайдуть ідеальну ділянку в бажаному передмісті Чикаго.' },
      step3: { title: 'ДИЗАЙН ТА ДОЗВОЛИ', desc: 'Архітектурне планування та отримання всіх погоджень у мерії.' },
      step4: { title: 'ФАЗА БУДІВНИЦТВА', desc: 'Високоякісне будівництво за фіксованою ціною без сюрпризів.' },
      step5: { title: 'ЗАЇЗД ТА ПРИБУТОК', desc: 'Заходьте у свій дім мрії з миттєвим капіталом і спокоєм.' }
    },
    calculator: {
      title: 'Скільки коштує?',
      area: 'Площа будинку',
      quality: 'Рівень оздоблення',
      total: 'Орієнтовна сума'
    },
    digitalTwin: {
      tag: 'Engineering Perfection',
      title: 'План вашого дому:',
      titleAccent: 'Цифровий двійник',
      desc: "Ми не просто будуємо стіни. Ми створюємо повну цифрову модель вашого майбутнього дому. Від архітектурних креслень до найдрібніших деталей інтер'єру — ви бачите все ще до початку робіт.",
      cta: 'Переглянути деталі проекту',
      phase: 'Фаза: Точне планування'
    },
    markers: {
      title: "Що всередині вашого дому?",
      subtitle: "Наведіть на точки, щоб побачити корисні програми та технології, які ми впроваджуємо в кожен проект.",
      learnMore: "Дізнатися більше",
      green: {
        title: "Зелена програма",
        desc: "Встановлення сонячних панелей та систем накопичення енергії. Отримайте до 30% компенсації від держави на будівництво еко-будинку.",
        badge: "Federal Credit"
      },
      plan: {
        title: "План вашого дому",
        desc: "Ми створюємо цифровий двійник будинку. Кожен квадратний метр оптимізовано для вашої родини ще до початку будівництва.",
        badge: "Smart Layout"
      },
      security: {
        title: "Система безпеки",
        desc: "Вбудовані смарт-камери та сенсори проникнення. Повний контроль вашої території з будь-якої точки світу через смартфон.",
        badge: "Safe & Secure"
      },
      climate: {
        title: "Клімат-контроль",
        desc: "Система вентиляції з рекуперацією повітря. Свіже повітря без втрати тепла навіть у найлютіші морози Чикаго.",
        badge: "Eco-Air"
      }
    }
  },
  ru: {
    nav: { about: 'Шаги', services: 'Стили', calculator: 'Цена', contact: 'Связь' },
    hero: {
      title: 'Построй новый дом. Без стресса.',
      subtitle: 'Мы найдем землю, оформим кредит, сделаем дизайн и построим. Вы просто заезжаете. Легко.',
      cta: 'Начать стройку'
    },
    badCredit: "Плохая кредитная история? Не проблема. Мы поможем.",
    steps: {
      title: 'Как это работает',
      step1: { title: 'СТРАТЕГИЯ И КРЕДИТ', desc: 'Мы обеспечиваем финансовые решения даже для сложных кредитных профилей.' },
      step2: { title: 'ПОИСК ЗЕМЛИ', desc: 'Наши агенты найдут идеальный участок в желаемом пригороде Чикаго.' },
      step3: { title: 'ДИЗАЙН И РАЗРЕШЕНИЯ', desc: 'Архитектурное планирование и получение всех согласований в мэрии.' },
      step4: { title: 'ФАЗА СТРОЙКИ', desc: 'Высококачественное строительство по фиксированной цене без сюрпризов.' },
      step5: { title: 'ЗАЕЗД И ПРИБЫЛЬ', desc: 'Входите в дом своей мечты с мгновенным капиталом и спокойствием.' }
    },
    calculator: {
      title: 'Сколько стоит?',
      area: 'Площадь дома',
      quality: 'Уровень отделки',
      total: 'Примерная сумма'
    },
    digitalTwin: {
      tag: 'Engineering Perfection',
      title: 'План вашего дома:',
      titleAccent: 'Цифровой двойник',
      desc: "Мы не просто строим стены. Мы создаем полную цифровую модель вашего будущего дома. От архитектурных чертежей до мельчайших деталей интерьера — вы видите все еще до начала работ.",
      cta: 'Посмотреть детали проекта',
      phase: 'Фаза: Точное планирование'
    },
    markers: {
      title: "Что внутри вашего дома?",
      subtitle: "Наведите на точки, чтобы увидеть полезные программы и технологии, которые мы внедряем в каждый проект.",
      learnMore: "Узнать больше",
      green: {
        title: "Зеленая программа",
        desc: "Установка солнечных панелей и систем накопления энергии. Получите до 30% компенсации от государства на строительство эко-дома.",
        badge: "Federal Credit"
      },
      plan: {
        title: "План вашего дома",
        desc: "Мы создаем цифровой двойник дома. Каждый квадратный метр оптимизирован для вашей семьи еще до начала строительства.",
        badge: "Smart Layout"
      },
      security: {
        title: "Система безопасности",
        desc: "Встроенные смарт-камеры и датчики проникновения. Полный контроль вашей территории из любой точки мира через смартфон.",
        badge: "Safe & Secure"
      },
      climate: {
        title: "Климат-контроль",
        desc: "Система вентиляции с рекуперацией воздуха. Свежий воздух без потери тепла даже в самые лютые морозы Чикаго.",
        badge: "Eco-Air"
      }
    }
  }
};
