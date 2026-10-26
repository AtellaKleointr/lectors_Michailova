import React from 'react';
import '../styles/partners.css';
import iclLogo from '../data/images/icl.png';
import tatneftLogo from '../data/images/tatneft.png';

const partners = [
    {
        id: 'icl',
        name: 'ICL',
        logo: iclLogo,
        url: 'https://icl.ru/', // Ссылка на сайт ICL
        description:
            'ICL — высокотехнологичная, динамично развивающаяся группа компаний, ' +
            'входящая в число крупнейших ИТ-компаний России, предоставляющая весь ' +
            'спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана ' +
            'в 1991 году на базе завода ЭВМ Казанским производственным объединением ' +
            'вычислительных систем (КПО ВС).',
    },
    {
        id: 'tatneft',
        name: 'ТАТНЕФТЬ',
        logo: tatneftLogo,
        url: 'https://www.tatneft.ru/', // Ссылка на сайт ТАТНЕФТЬ
        description:
            '«Татнефть» — одна из крупнейших российских вертикально-интегрированных ' +
            'компаний, в составе которой динамично развиваются нефтегазодобыча, ' +
            'нефтепереработка, нефтехимия, сеть АЗС, комплексный кластер ' +
            'электроэнергетики, разработка и производство оборудования для ' +
            'нефтегазовой отрасли и блок сервисных структур.',
    },
];

function Partners() {
    return (
        <section className="partners-section">
            <p className="partners-label">Партнёры</p>

            <div className="partners-grid">
                {partners.map((p) => (
                    <article className="partner-card" key={p.id}>

                        {/* Стрелка, ведущая на сайт компании */}
                        <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="partner-arrow"
                            aria-label={`Перейти на сайт ${p.name}`}
                        >
                            ↗
                        </a>

                        {/* Логотип */}
                        <div className="partner-logo">
                            <img
                                src={p.logo}
                                alt={`Логотип ${p.name}`}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>

                        <h3 className="partner-name">{p.name}</h3>
                        <p className="partner-desc">{p.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Partners;