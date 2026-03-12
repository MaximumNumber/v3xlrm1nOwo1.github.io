function scrolll() {
    var left = document.querySelector(".scroll-images");
    if (left) left.scrollBy(-350, 0);
}

function scrollr() {
    var right = document.querySelector(".scroll-images");
    if (right) right.scrollBy(350, 0);
}


async function fetchCertificates() {
    const certificatesContainer = document.getElementById('certificates-container');
    if (!certificatesContainer) return;

    try {
        const response = await fetch('./data/certificates.json');
        const data = await response.json();

        data.forEach(item => {
            const certificateDiv = document.createElement('div');
            certificateDiv.classList.add('child');

            const img = document.createElement('img');
            img.classList.add('child-img');
            img.src = item['image path'];
            img.alt = item['image alt'];

            const textDiv = document.createElement('div');
            textDiv.classList.add('text');

            const link = document.createElement('a');
            link.href = item['certificate url'];
            link.target = '_blank';
            link.classList.add('text');

            const titleParagraph = document.createElement('p');
            titleParagraph.textContent = item.title;

            link.appendChild(titleParagraph);
            textDiv.appendChild(link);
            certificateDiv.appendChild(img);
            certificateDiv.appendChild(textDiv);
            certificatesContainer.appendChild(certificateDiv);
        });
    } catch (error) {
        console.error('Error fetching certificates:', error);
    }
}

fetchCertificates();



async function fetchPublications() {
    const paperListContainer = document.getElementById('paperList');
    if (!paperListContainer) return;

    try {
        const response = await fetch('./data/publications.json');
        const data = await response.json();

        if (data.length === 0) {
            const noPublicationsDiv = document.createElement('div');
            noPublicationsDiv.classList.add('paper');

            const noPublicationsParagraph = document.createElement('p');
            noPublicationsParagraph.style.textDecoration = 'none';
            noPublicationsParagraph.style.color = '#bdc2d3';
            noPublicationsParagraph.style.fontFamily = 'Inconsolata';
            noPublicationsParagraph.style.fontSize = '20px';
            noPublicationsParagraph.style.display = 'flex';
            noPublicationsParagraph.style.alignItems = 'center';
            noPublicationsParagraph.style.justifyContent = 'center';
            noPublicationsParagraph.textContent = 'No Publications Yet';

            noPublicationsDiv.appendChild(noPublicationsParagraph);
            paperListContainer.appendChild(noPublicationsDiv);
        } else {
            data.forEach(paper => {
                const paperDiv = document.createElement('div');
                paperDiv.classList.add('paper');

                const paperNameHeading = document.createElement('h3');

                const paperNameLink = document.createElement('a');
                paperNameLink.classList.add('paper-name');
                paperNameLink.href = paper.url || '#';
                paperNameLink.target = '_blank';
                paperNameLink.textContent = paper.name;

                paperNameHeading.appendChild(paperNameLink);
                paperDiv.appendChild(paperNameHeading);

                const paperTagDiv = document.createElement('div');
                paperTagDiv.classList.add('paper-tag-div');

                const paperTagSpan = document.createElement('span');
                paperTagSpan.classList.add('paper-tag');

                const paperTagList = document.createElement('li');
                paperTagList.style.fontSize = '12px';
                paperTagList.textContent = paper.tag;

                paperTagSpan.appendChild(paperTagList);
                paperTagDiv.appendChild(paperTagSpan);
                paperDiv.appendChild(paperTagDiv);

                const infoParagraph = document.createElement('p');
                infoParagraph.classList.add('paper-info');

                const fullName = "Mohammed Khalil";
                const regex = new RegExp(`\\b${fullName}\\b`, 'g');
                const replacement = `<span style="color: #ae6de3; font-weight: bold;">${fullName}</span>`;
                const updatedText = paper['other'].replace(regex, replacement);
                infoParagraph.innerHTML = updatedText;

                paperDiv.appendChild(infoParagraph);
                paperListContainer.appendChild(paperDiv);
            });
        }
    } catch (error) {
        console.error('Error fetching publications:', error);
    }
}

fetchPublications();



async function fetchProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    try {
        const response = await fetch('./data/OtherProjects.json');
        const data = await response.json();

        data.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('small');

            const folderImg = document.createElement('img');
            folderImg.classList.add('folder');
            folderImg.src = './src/img/folder.png';
            folderImg.alt = 'Folder icon';

            const title = document.createElement('h3');
            title.classList.add('proj-name');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.classList.add('p-proj');
            description.textContent = project.container;

            const frameworkImg = document.createElement('img');
            frameworkImg.src = project['image src'];
            frameworkImg.alt = project['image alt'];
            frameworkImg.style.cssText = project['image style'];

            const projectLink = document.createElement('a');
            projectLink.href = project.url;
            projectLink.target = '_blank';
            projectLink.classList.add('link');

            projectLink.appendChild(folderImg);
            projectLink.appendChild(title);
            projectLink.appendChild(description);
            projectLink.appendChild(frameworkImg);

            projectDiv.appendChild(projectLink);
            projectsContainer.appendChild(projectDiv);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

fetchProjects();



async function fetchDatasets() {
    const datasetContainer = document.getElementById('datasetList');
    if (!datasetContainer) return;

    try {
        const response = await fetch('./data/datasets.json');
        const data = await response.json();

        if (data.length === 0) {
            const noDataDiv = document.createElement('div');
            noDataDiv.classList.add('paper');

            const noDataParagraph = document.createElement('p');
            noDataParagraph.style.textDecoration = 'none';
            noDataParagraph.style.color = '#bdc2d3';
            noDataParagraph.style.fontFamily = 'Inconsolata';
            noDataParagraph.style.fontSize = '20px';
            noDataParagraph.style.display = 'flex';
            noDataParagraph.style.alignItems = 'center';
            noDataParagraph.style.justifyContent = 'center';
            noDataParagraph.textContent = 'No Datasets Available.';

            noDataDiv.appendChild(noDataParagraph);
            datasetContainer.appendChild(noDataDiv);
        } else {
            data.forEach(dataset => {
                const datasetDiv = document.createElement('div');
                datasetDiv.classList.add('dataset-side-by-side');

                const paperDiv = document.createElement('div');
                paperDiv.classList.add('paper');

                const flexContainer = document.createElement('div');
                flexContainer.classList.add('flex-container');

                const datasetImage = document.createElement('img');
                datasetImage.classList.add('dataset-image');
                datasetImage.src = dataset.image;
                datasetImage.alt = dataset.name;

                const textContainer = document.createElement('div');
                textContainer.classList.add('text-container');

                const datasetNameHeading = document.createElement('h3');
                datasetNameHeading.classList.add('paper-name');

                const datasetNameLink = document.createElement('a');
                datasetNameLink.classList.add('paper-name');
                datasetNameLink.href = dataset.url;
                datasetNameLink.target = '_blank';
                datasetNameLink.textContent = dataset.name;

                datasetNameHeading.appendChild(datasetNameLink);

                const datasetInfo = document.createElement('p');
                datasetInfo.classList.add('paper-info');
                datasetInfo.style.fontSize = '15px';
                datasetInfo.textContent = dataset.container;

                textContainer.appendChild(datasetNameHeading);
                textContainer.appendChild(datasetInfo);

                flexContainer.appendChild(datasetImage);
                flexContainer.appendChild(textContainer);

                paperDiv.appendChild(flexContainer);
                datasetDiv.appendChild(paperDiv);

                datasetContainer.appendChild(datasetDiv);
            });
        }
    } catch (error) {
        console.error('Error fetching datasets:', error);
    }
}

fetchDatasets();
