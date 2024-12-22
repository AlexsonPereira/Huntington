window.addEventListener("DOMContentLoaded", showCountDown)
window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a")
    links.forEach(link => {
        link.addEventListener("click", (e)=>{
            console.log(e.srcElement.innerText)
            if(["SOBRE","SPEAKERS","PROGRAMAÇÃO","COMISSÃO","PATROCINADORES","FAQ"].includes(e.srcElement.innerText)){
                showSubMenu()
            }
        })
    })
})

const peoples = [
    {
        name: "Eduardo Motta",
        subtitle:"CREMESP 58.933 - RQE/RA 436.811",
        image: "./assets/Img/Fotos CV/EDUARDO.png",
        description:`Fundador da Huntington;<br>
            Corresponsável pelo Centro de Reprodução Humana Santa Joana;<br>
            Professor Adjunto do Departamento de Ginecologia da Escola Paulista de Medicina – Unifesp;<br>
            Especialização em Reprodução Humana na Huntington Reproductive Center, Califórnia – EUA;<br>
            Mestrado e Doutorado em Medicina pelo Departamento de Ginecologia – Escola Paulista de Medicina Unifesp;<br>
            Especialização em Ginecologia e Obstetrícia pela FEBRASGO;<br>
            Residência Médica em Ginecologia e Obstetrícia pela Escola Paulista de Medicina;<br>
            Médico formado pela Faculdade de Ciências Médicas da Pontifícia Universidade Católica de Campinas.`
    },
    {
        name: "Cláudia Gomes Padilla",
        subtitle:"CREMESP 114.419 - RQE/RA 66.0891",
        image: "./assets/Img/Fotos CV/CLAUDIA.jpg",
        description:`Coordenadora médica das unidades Ibirapuera e Brasília;<br>
Certificado de área de atuação de reprodução assistida pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO)<br>
Doutora em Ciências pelo Departamento de Obstetrícia e Ginecologia da Faculdade de Medicina da Universidade de São Paulo com ênfase em Medicina Reprodutiva (USP);<br>
Título de Especialista em Ginecologia e Obstetrícia pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO);<br>
Residência Médica em Ginecologia e Obstetrícia pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (USP);<br>
Médica formada pela Universidade Federal do Paraná.`
    },
    {
        name: "Thais Sanches Domingues Cury",
        subtitle:"CRM-SP 104.252 - RQE/RA 97.7111",
        image: "./assets/Img/Fotos CV/THAIS.jpg",
        description:`Revisora da revista científica Human Reproduction Archives (SBRH);<br>
Editora associada da revista internacional Minerva Ginecológic;<br>
Professora convidada UNIFESP para graduação desde 2010;<br>
Doutora em Reprodução Humana pela Universidade Federal de São Paulo (UNIFESP/EPM);<br>
Residência Médica em Reprodução Humana pela Escola Paulista de Medicina – Universidade Federal de São Paulo (UNIFESP/EPM);<br>
Título de Especialista em Ginecologia e Obstetrícia pela Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO);<br>
Residência Médica em Obstetrícia e Ginecologia pela Escola Paulista de Medicina (UNIFESP/EPM);<br>
Médica formada pela Unesp – Faculdade de Ciências Médicas Júlio de Mesquita Filho.`
    },
    {
        name: "Michele Q. Panzan",
        subtitle:"CRM-SP 88.479 - RQE/RA 434363",
        image: "./assets/Img/Fotos CV/MICHELE.jpg",
        description:`Coordenadora médica da Unidade de Campinas;<br>
Doutora em Ginecologia Endocrina e Climatério pela Escola Paulista de Medicina (UNIFESP);<br>
Mestre em Ginecologia Endócrina e Climatério pela Escola Paulista de Medicina – Universidade Federal de São Paulo (UNIFESP/EPM);<br>
Residência Médica em Reprodução Humana pela Escola Paulista de Medicina – Universidade Federal de São Paulo (UNIFESP/EPM);<br>
Título de especialista em Ginecologia e Obstetrícia (TEGO 542/99);<br>
Residência Médica em Ginecologia e Obstetrícia pela Pontifícia Universidade Católica de São Paulo (PUC – Sorocaba);<br>
Médica formada pela Faculdade de Medicina de Taubaté – Universidade de Taubaté.<br>
TEGO 512/99<br>
Especialização em Reprodução assistida RQE 434.363<br>
Especialização Endoscopia ginecológica RQE 434.361<br>
Especialização Ultrassonografia em ginecologia e obstetrícia RQE 434.362`
    },
    {
        name: "José Roberto Alegretti",
        subtitle:"CRBio 31.580-01",
        image: "./assets/Img/Fotos CV/JOSÉ.jpg",
        description:`Biólogo formado pela Universidade Santo Amaro (UNISA) e Mestre em Ciências pela Escola Paulista de Medicina – Unifesp – Departamento de Ginecologia.<br>
Especialista em Fertilização in vitro pelo Huntington Reproductive Center– Los Angeles – USA;<br>
Especialista em Diagnóstico Genético Pré-Implantacional pelo Reproductive Biology Associates – Atlanta – USA e Universidade Aberta de Barcelona – Espanha;<br>
Especialista em Cocultivo embrionário pelo Instituto Valenciano de Infertilidade – Valência – Espanha;<br>
Especialista em Micromanipulação de Gametas pelo Institute for Reproductive Medicine and Science, Saint Barnabas Medical Center, New Jersey, EUA;<br>
Embriologista desde 1995.`
    },
    {
        name: "Maurício Barbour Chehin",
        subtitle:"CRM-SP 108.063 - RQE/RA 253.482",
        image: "./assets/Img/Fotos CV/MAURICIO.jpg",
        description:`Coordenador Médico e Responsável Técnico da Unidade Vila Mariana;<br>
Coordenador Médico do Departamento Científico;<br>
Coordenador do Setor de Oncofertilidade;<br>
Doutorado em Ciências Médicas pelo Departamento de Ginecologia, Disciplina de Ginecologia Endocrinológica e Setor Integrado de Reprodução Humana da Universidade Federal de São Paulo – Escola Paulista de Medicina (UNIFESP/EPM);<br>
Preservação da Fertilidade em pacientes Oncológicos pela Northwestern University – Oncofertility Consortium – Chicago;<br>
Membro fundador da Rede Brasileira de Oncofertilidade – ReBOC;<br>
Título de especialista em Reprodução Assistida pela Federação Brasileira das Sociedades de Ginecologia e Obstetrícia e Associação Médica Brasileira (FEBRASGO e AMB);<br>
Título de especialista em Ginecologia e Obstetrícia (FEBRASGO e AMB);<br>
Título de especialista em Videolaparoscopia (FEBRASGO e AMB);<br>
Especialização em Reprodução Humana pela Universidade Federal de São Paulo – Escola Paulista de Medicina (UNIFESP/EPM);<br>
Residência Médica em Ginecologia e Obstetrícia pela Universidade Estadual de Campinas (UNICAMP);<br>
Médico Formado pela Faculdade de Medicina de Santo Amaro (UNISA).`
    },
    {
        name: "João Pedro Junqueira Caetano",
        subtitle:"CRM-MG 22.196 - RQE/RA 43.380",
        image: "./assets/Img/Fotos CV/JOAO.jpg",
        description:`Diretor-Médico do Grupo Pró-Criar de Medicina Reprodutiva;<br>
Professor Convidado da Pós-Graduação da Faculdade de Ciências Médicas de Minas Gerais (FCMMG);<br>
Doutorado, UFMG (Departamento de Cirurgia);<br>
Mestrado, UFMG (Departamento de Ginecologia e Obstetrícia);<br>
Coordenador Científico do Grupo Pró-Criar de Medicina Reprodutiva;<br>
Pós-Graduação em Fertilização In Vitro pela Universidade de Paris XI – França, Serviço do Prof René Frydman (1991-92);<br>
Membro da Câmara Técnica de Reprodução Assistida do Conselho Regional de Medicina de Mina Gerais (CRM-MG);<br>
Membro da Comissão de Ética do Grupo Pró-Criar de Medicina Reprodutiva;<br>
Membro da Comissão Nacional Especializada de Reprodução Humana da FEBRASGO (2016-2019);<br>
Membro da “American Society for Reproductive Medicine” (ASRM);<br>
Título de Habilitação em Reprodução Assistida pela FEBRASGO/AMB;<br>
Título de Capacitação em Reprodução Assistida pela SBRA – Sociedade Brasileira de Reprodução Assistida.`
    },
    {
        name: "Ricardo Mello Marinho",
        subtitle:"CRM-MG 14.265 - RQE/RA 43.133",
        image: "./assets/Img/Fotos CV/RICARDO.jpg",
        description:`Médico Ginecologista, formado em 1981 pela UFMG – CRMMG: 14265<br>
Título de Habilitação em Reprodução Assistida pela FEBRASGO/AMB<br>
Professor adjunto de Ginecologia da Faculdade de Ciências Médicas de Minas Gerais (FCMMG)<br>
Professor da Faculdade de Medicina de Barbacena – MG<br>
Coordenador do Comitê de oncofertilidade de Sociedade Brasileira de Reprodução Humana<br>
Doutorado (Ginecologia, Escola Paulista de Medicina – UNIFESP -SP)<br>
Mestrado (Ginecologia, UFMG)<br>
Residência em Ginecologia no Hospital Mater Dei<br>
Título de Especialista em Ginecologia e Obstetrícia pela FEBRASGO/AMB<br>
Pós-graduação em Fertilização Assistida Microcirurgia Tubária e Infertilidade pelo Hammersmith Hospital, Universidade de Londres, Serviço do Prof. Robert Winston.`
    },
    {
        name: "Aline Rodrigues Lorenzon",
        subtitle:"",
        image: "./assets/Img/Fotos CV/ALINE.jpg",
        description:`Graduação em Ciências Biológicas pelo Instituto de Biociências da Universidade de São Paulo (USP);<br>
Doutorado em Ciências pelo Departamento de Biologia Celular e do Desenvolvimento pelo Instituto de Ciências Biomédicas da Universidade de São Paulo (USP) com período no Department of Obstetrics, Gynecology and Reproductive Sciences- University of California San Francisco (UCSF), Estados Unidos com ênfase em reprodução humana;<br>
Pós-Doutorado pelo Departamento de Biologia Celular e do Desenvolvimento pelo Instituto de Ciências Biomédicas da Universidade de São Paulo (USP) com período no Department of Physiology, Development and Neuroscience, University of Cambridge, Inglaterra;<br>
Treinamento em Embriologia pela Huntington Medicina Reprodutiva;<br>
Pesquisadora na área de Reprodução desde 2005.`
    }
]

function showSubMenu(){
    const submenu = document.getElementById("submenu-mobile")
    if(submenu.classList.contains("flex")){
        submenu.classList.remove("flex")
        submenu.classList.add("hidden")
        setTimeout(() => {
           submenu.classList.remove('opacity-100');
           submenu.classList.add('opacity-0');
           submenu.classList.add('-translate-x-full');
           submenu.classList.remove('translate-x-0');

        }, 100);
    }else{
        submenu.classList.add("flex")
        submenu.classList.remove("hidden")
        setTimeout(() => {
            submenu.classList.remove('opacity-0');
            submenu.classList.add('opacity-100');
            submenu.classList.remove('-translate-x-full')
            submenu.classList.add('translate-x-0') 
        }, 100);
    }
    
}

function showCv(element){
    const spot = element.closest("div[spot-person]")
    const name = spot.querySelector(".name-person")
    
    const data = peoples.filter(e => (e.name == name.innerText))
    if(data.length > 0){
        const nameCv = document.getElementById("name-cv")
        const subtitleCv = document.getElementById("subtitle-cv")
        const descriptionCv = document.getElementById("description-cv")
        const imageCv = document.getElementById("image-cv")
        nameCv.innerText = data[0].name
        subtitleCv.innerText = data[0].subtitle
        descriptionCv.innerHTML = data[0].description
        imageCv.src = data[0].image
        showAndHiddenCv()
    }


}

function showCountDown(){
    const divDays = document.getElementById("days")
    if(!divDays) return
    const divHours = document.getElementById("hours")
    const divMinutes = document.getElementById("min")
    const divsSeconds = document.getElementById("secon")
    const countDownDate = new Date("Apr 11, 2025 14:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        divDays.innerHTML = `${days}`
        divHours.innerHTML = `${hours}`
        divMinutes.innerHTML = `${minutes}`
        divsSeconds.innerHTML = `${seconds}`
        if (distance < 0) {
         clearInterval(x);
            
        }   
    }, 1000);

}


function showAndHiddenCv(){
    const cv = document.getElementById("cv")
    if(cv){
        if(cv.classList.contains("hidden")){
            cv.classList.remove("hidden")
            cv.classList.add("flex")
        }else{
            cv.classList.add("hidden")
            cv.classList.remove("flex")
        }
    }
}

