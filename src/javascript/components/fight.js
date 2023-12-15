import controls from '../../constants/controls';

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

export function getHitPower(fighter) {
    // return hit power
    const hitPower = fighter.attack * getRandom(1, 2);
    return hitPower;
}

export function getBlockPower(fighter) {
    // return block power
    const blockPower = fighter.defense * getRandom(1, 2);
    return blockPower;
}

export function getDamage(attacker, defender) {
    // return damage
    const hitPowerAttacker = getHitPower(attacker);
    const blockPowerDefender = getBlockPower(defender);
    const damage = hitPowerAttacker - blockPowerDefender;

    if (blockPowerDefender > hitPowerAttacker) {
        return 0;
    }
    return damage;
}

export async function fight(firstFighter, secondFighter) {
    let firstKey = null;
    let secondKey = null;
    const keysPressed = [];
    document.addEventListener('keydown', event => {
        if (
            event.key === controls.PlayerOneAttack ||
            event.key === controls.PlayerTwoAttack ||
            event.key === controls.PlayerOneBlock ||
            event.key === controls.PlayerTwoBlock
        ) {
            if (firstKey === null) {
                firstKey = event.key;
                keysPressed.push(firstKey);
            } else if (firstKey !== null) {
                secondKey = event.key;
                keysPressed.push(secondKey);
            }
        }
    });

    getDamage(firstFighter, secondFighter);

    return new Promise(resolve => {
        // resolve the promise with the winner when fight is over
        resolve();
    });
}
