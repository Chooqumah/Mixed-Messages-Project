const part1 = ['Maybe you need to','Try your best to','Sometimes, you just need to','To be happy, you need to'];
const part2 = ['take', 'think about','eat','sleep with','get rid of'];
const part3 = ['an apple','a puppy','a marshmallow','a friend','familly'];

const generateMsg = () => {
    let pt1 = part1[Math.floor(Math.random() * part1.length)];
    let pt2 = part2[Math.floor(Math.random() * part2.length)];
    let pt3 = part3[Math.floor(Math.random() * part3.length)];

    const mixedMsg = `${pt1} ${pt2} ${pt3}`;
    return mixedMsg;
}

console.log(generateMsg());