import createElement from '../helpers/domHelper';

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    // todo: show fighter info (image, name, health, etc.)
    const fighterInfo = createElement({
        tagName: 'div',
        className: 'fighter___info'
    });

    fighterElement.appendChild(fighterInfo);

    const fighterImg = createFighterImage(fighter || '');
    fighterInfo.appendChild(fighterImg);

    const fighterInfoContent = createElement({
        tagName: 'div',
        className: 'fighter___info-content'
    });

    fighterInfo.appendChild(fighterInfoContent);

    let fighterContentDetail;

    if (fighter !== null && typeof fighter === 'object') {
        Object.keys(fighter).forEach(key => {
            if (key !== 'source' && key !== '_id') {
                fighterContentDetail = createElement({
                    tagName: 'p'
                });

                switch (key) {
                    case 'name':
                        fighterContentDetail.textContent = `Name: ${fighter[key]}`;
                        break;
                    case 'health':
                        fighterContentDetail.textContent = `Health: ${fighter[key]}`;
                        break;
                    case 'attack':
                        fighterContentDetail.textContent = `Attack: ${fighter[key]}`;
                        break;
                    case 'defense':
                        fighterContentDetail.textContent = `Defense: ${fighter[key]}`;
                        break;
                    default:
                        break;
                }

                fighterInfoContent.appendChild(fighterContentDetail);
            }
        });
    }

    return fighterElement;
}
