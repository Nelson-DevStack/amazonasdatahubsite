import BaseIcon from '@site/static/img/icons/base.svg';
import DocumentacaoIcon from "@site/static/img/icons/documentacao.svg";
import RegLinearIcon from '@site/static/img/icons/reg_linear.svg';
import RegLogisticaIcon from '@site/static/img/icons/reg_logistica.svg';
import SerieTempIcon from '@site/static/img/icons/time_series.svg';
import StorytellingIcon from '@site/static/img/icons/storytelling.svg';

const cardDataBr = [
  {
    IconSvg: <BaseIcon className="max-h-12" />,
    iconUrl: "@site/static/img/icons/base.svg",
    iconAlt: "Ícone de base de dados",
    title: "Dados Reais",
    text: "Esse pacote traz dados reais do Amazonas. Assim, você pode aprender e ter insights de verdade."
  },
  {
    IconSvg: <DocumentacaoIcon className="max-h-12" />,
    iconUrl: "@site/static/img/icons/documentacao.svg",
    iconAlt: "Ícone de Documentação",
    title: "Dados Documentados",
    text: "Cada conjunto de dados é documentado para explicar sobre o contexto e sobre o que cada variável representa."
  },
  {
    IconSvg: <RegLinearIcon className="max-h-12" />,
    iconUrl: "/img/icons/reg_linear.svg",
    iconAlt: "Ícone de regressão linear",
    title: "Regressão Linear",
    text: "Com os dados, você pode aplicar e praticar Regressão Linear, além da possiblidade de aplicar métodos de Deep Learning."
  },
  {
    IconSvg: <RegLogisticaIcon className="max-h-12" />,
    iconUrl: "/img/icons/reg_logistica.svg",
    iconAlt: "Ícone de Regressão Logística",
    title: "Regressão Logística",
    text: "Com essa técnica, é possível realizar a classificação de variáveis dicotômicas nos dados que esse pacote oferece."
  },
  {
    IconSvg: <SerieTempIcon className="max-h-12" />,
    iconUrl: "/img/icons/time_series.svg",
    iconAlt: "Ícone de Séries Temporais",
    title: "Análise de Séries Temporais",
    text: "Veja a influência da sazonalidade nos dados, e assim, crie modelos para fazer predição de dados de séries temporais."
  },
  {
    IconSvg: <StorytellingIcon className="max-w-12" />,
    iconUrl: "/img/icons/storytelling.svg",
    iconAlt: "Ícone de Apresentação",
    title: "Apresentação de Dados",
    text: "Treine e teste suas habilidades de programação, storytelling, estatística e inferência."
  }
]

import BiologicalIcon from "@site/static/img/icons/biology_icon.svg";
import HealthIcon from "@site/static/img/icons/dados_saude.svg";
import EconomyIcon from "@site/static/img/icons/dados_economia.svg";
import MeteorologyIcon from "@site/static/img/icons/dados_meteorologicos.svg";
import SocialScienceIcon from "@site/static/img/icons/dados_ciencias_sociais.svg";

const contributeCardDataBr = [
  {
    IconSvg: <BiologicalIcon className="max-w-32" />,
    iconUrl: "/img/icons/biology_icon.svg",
    iconAlt: "Ícone de dados biológicos",
    title: "Dados Biológicos",
    text: "Aceitamos dados de pesquisas ou de trabalhos acadêmicos de Biologia que possam ser disponibilizados para esse projeto. Tais dados podem ser: acompanhamento de amostras, classificação de espécies, famílias, reinos, etc."
  },
  {
    IconSvg: <HealthIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_saude.svg",
    iconAlt: "Ícone de dados de saúde",
    title: "Dados de Saúde e Farmácia",
    text: "Procuramos dados de acompanhamento de pacientes, sejam de Educação Física, Fisioterapia, Medicina, dados epidemiológicos, dados de acompanhamento de medicamentos, evolução, testes e tratamentos."
  },
  {
    IconSvg: <EconomyIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_economia.svg",
    iconAlt: "Ícone de dados de economia",
    title: "Dados de Economia",
    text: "Buscamos dados com preços de produtos, indicadores econômicos, indicadores agropecuários, valores de imóveis, consumo, assim como dados de renda, crédito, e churn."
  },
  {
    IconSvg: <MeteorologyIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_meteorologicos.svg",
    iconAlt: "Ícone de dados meteorológicos",
    title: "Dados Meteorológicos",
    text: "Aceitamos dados meteorológicos, principalmente sobre regime pluviométricos, temperatura média, precipitação, vento, umidade relativa, etc."
  },
  {
    IconSvg: <SocialScienceIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_ciencias_sociais.svg",
    iconAlt: "Ícone de dados de ciências sociais",
    title: "Dados de Ciências Sociais",
    text: "Buscamos dados demográficos, sobre acesso a educação, indidacores sociais, pesquisas com opiniões, dados sobre hábito e consumo, dados de desempenho pedagógico e acadêmico, dados sobre evasão escolar, etc."
  }
]

//

const cardDataEn = [
  {
    IconSvg: <BaseIcon className='max-h-12' />,
    iconUrl: BaseIcon,
    iconAlt: "Database icon",
    title: "Real Data",
    text: "This package contains real data from Amazonas. You can learn and gain real insights."
  },
  {
    iconUrl: DocumentacaoIcon,
    IconSvg: <DocumentacaoIcon className="max-h-12" />,
    iconAlt: "Documentation icon",
    title: "Documented Data",
    text: "Each dataset in this package is documented to explain what each variable is and what the dataset represents."
  },
  {
    IconSvg: <RegLinearIcon className="max-h-12" />,
    iconUrl: RegLinearIcon,
    iconAlt: "Linear regression icon",
    title: "Linear Regression",
    // text: "For those who want to learn about Linear Regression and apply Deep Learning methods, this R package is essential for you."
    text: "With our datasets, you can apply and practice Linear Regression, in addition to the possibility of applying Deep Learning methods."
  },
  {
    IconSvg: <RegLogisticaIcon className="max-h-12" />,
    iconUrl: RegLogisticaIcon,
    iconAlt: "Logistic regression icon",
    title: "Logistic Regression",
    // text: "See and perform analysis to predict the classification of a given dataset in this package."
    text: "With this method, it is possible to classify a binary variable from some datasets from this package"
  },
  {
    IconSvg: <SerieTempIcon className="max-h-12" />,
    iconUrl: SerieTempIcon,
    iconAlt: "Time series icon",
    title: "Time Series Analysis",
    text: "See the influence of seasonality in the data, and create models to make predictions for time series data."
  },
  {
    IconSvg: <StorytellingIcon className="max-h-12" />,
    iconUrl: StorytellingIcon,
    iconAlt: "Presentation icon",
    title: "Data Presentation",
    text: "Train and test your programming, storytelling, statistics, and inference skills."
  }
];

const contributeCardDataEn = [
  {
    IconSvg: <BiologicalIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_biologicos.svg",
    iconAlt: "Biological data icon",
    title: "Biological Data",
    text: "We are looking for research or academic work data in Biology that can be made available for this project. Such data can include: sample tracking, species classification, families, kingdoms, etc."
  },
  {
    IconSvg: <HealthIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_saude.svg",
    iconAlt: "Health data icon",
    title: "Health and Pharmacy Data",
    text: "We are seeking patient tracking data, including Physical Education, Physiotherapy, Medicine, as well as epidemiological data, medication tracking, medication evolution, drug testing data, and treatments."
  },
  {
    IconSvg: <EconomyIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_economia.svg",
    iconAlt: "Economics data icon",
    title: "Economic Data",
    text: "We are looking for data of product prices, economic indicators, agricultural indicators, real estate, consumption, as well as income, credit, and churn data."
  },
  {
    IconSvg: <MeteorologyIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_meteorologicos.svg",
    iconAlt: "Meteorological data icon",
    title: "Meteorological Data",
    text: "We accept meteorological data, especially regarding rainfall regimes, average temperature, precipitation, wind, relative humidity, etc."
  },
  {
    IconSvg: <SocialScienceIcon className="max-w-32" />,
    iconUrl: "/img/icons/dados_ciencias_sociais.svg",
    iconAlt: "Social sciences data icon",
    title: "Social Sciences Data",
    text: "We are looking for demographic data, data on access to education, social indicators, opinion surveys, consumption habits, data on academic performance and school dropout rates, etc."
  }
];

export { cardDataBr, cardDataEn, contributeCardDataBr, contributeCardDataEn }
