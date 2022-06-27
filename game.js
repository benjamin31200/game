class Attributes {
constructor(name, health, minAttack, maxAttack) {
    this.name = name;
    this.health = health;
    this.minAttack = minAttack;
    this.maxAttack = maxAttack;
  }
}

class Spider extends Attributes {
  constructor(name, health, minAttack, maxAttack) {
    super(name, health, minAttack, maxAttack)
  }
}

class Hero extends Attributes {
  constructor(name, health, minAttack, maxAttack) {
    super(name, health, minAttack, maxAttack)
  }
}
const spider = [
  { ara : new Spider('ara', 200, 20, 30)},
  { chna : new Spider('chna', 220, 17, 25)},
  { pho : new Spider('pho', 180, 30, 40)},
  ];
const hercule = new Hero('Hercule', 580, 70, 80)
const fight = (hero, spider) => {

  const getRandomAttack = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
  const heroDamage = getRandomAttack(hero.minAttack, hero.maxAttack);
  const spiderDamage = getRandomAttack(spider.minAttack, spider.maxAttack);
  
  if(heroDamage >= hero.maxAttack - 3) {
    spider.health -= heroDamage * 1.25;
     console.log(`Coup critique infligé ! ${hero.name} inflige ${heroDamage * 1.25} pts de dégats, après cette attaque les points de vie de ${spider.name} sont de ${spider.health}, ${spider.name} lance une attaque!`);
  } else if(heroDamage <= hero.maxAttack - 3) { 
    spider.health -= heroDamage,
    console.log(`${hero.name} inflige ${heroDamage} pts de dégats, après cette attaque les points de vie de ${spider.name} sont de ${spider.health}, ${spider.name} lance une attaque!`);
    }
  
  if(spiderDamage >= spider.maxAttack - 3) {
    hero.health -= spiderDamage * 1.25,
      console.log(`Coup critique infligé ! ${spider.name} inflige ${spiderDamage * 1.25} pts de dégats, après cette attaque les points de vie de ${hero.name} sont de ${hero.health}, le tour est maintenant terminé`);
  }else if(spiderDamage <= spider.maxAttack - 3) { 
    hero.health -= spiderDamage,
console.log(`${spider.name} inflige ${spiderDamage} pts de dégats, après cette attaque les points de vie de ${hero.name} sont de ${hero.health}, le tour est maintenant terminé`);
    }
} 

console.log(fight(hercule, spider[0].ara))
console.log(fight(hercule, spider[1].chna))
console.log(fight(hercule, spider[2].pho))
