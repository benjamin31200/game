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
    super(name, health, minAttack, maxAttack);
  }
}

class Hero extends Attributes {
  constructor(name, health, minAttack, maxAttack) {
    super(name, health, minAttack, maxAttack);
  }
}
const spider = [
  new Spider("ara", 300, 35, 45),
  new Spider("chno", 320, 30, 40),
  new Spider("phobe", 270, 45, 55),
];
const hercule = new Hero("Hercule", 520, 60, 70);

const fight = (hero, spiders) => {
  const indexOf = spider.findIndex((b) => b.name === spiders.name);
  const getRandomAttack = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const heroDamage = getRandomAttack(hero.minAttack, hero.maxAttack);
  const spiderDamage = getRandomAttack(spiders.minAttack, spiders.maxAttack);

  if (hero.health <= 0) {
    return `🚨Fin de partie, ${hero.name} a perdu tous ses points de vie.🚨`;
  } else if (hero.health > 0 && spiders.health > 0) {
    console.log("​‼️​ DEBUT DE ROUD ​‼️​");
    if (heroDamage >= hero.maxAttack - 3) {
      (spiders.health -= heroDamage * 1.25),
        console.log(
          `Coup critique infligé ! ${hero.name} inflige ${
            heroDamage * 1.25
          } pts de dégats​⚡​, après cette attaque les points de vie de ${
            spiders.name
          } sont de ${spiders.health}​♥️​, ${spiders.name} lance une attaque!`
        );
    } else if (heroDamage <= hero.maxAttack - 3) {
      (spiders.health -= heroDamage),
        console.log(
          `${hero.name} inflige ${heroDamage} pts de dégats, après cette attaque les points de vie de ${spiders.name} sont de ${spiders.health}​♥️​, ${spiders.name} lance une attaque!`
        );
    }
  }

  if (spiders.health <= 0) {
    console.log("💀​💀​💀​💀​"),
      console.log(
        `Malheureusement ${spiders.name} a perdue tous ses points de vie et est éliminée !`
      ),
      console.log("💀​💀​💀​💀​"),
      spider.splice(indexOf, 1);
    if (spider.length === 0) {
      return "🚨Fin de partie, toutes les araignées ont étés vaincues !🚨";
    } else {
      for (const element of spider) {
        console.log(fight(hercule, element));
      }
    }
  } else if (spiders.health > 0 && hero.health > 0) {
    if (spiderDamage >= spiders.maxAttack - 3) {
      (hero.health -= spiderDamage * 1.25),
        console.log(
          `Coup critique infligé ! ${spiders.name} inflige ${
            spiderDamage * 1.25
          } pts de dégats​⚡​, après cette attaque les points de vie de ${
            hero.name
          } sont de ${hero.health}​♥️​, le tour est maintenant terminé`
        );
      for (const element of spider) {
        console.log(fight(hercule, element));
      }
    } else if (spiderDamage <= spiders.maxAttack - 3) {
      (hero.health -= spiderDamage),
        console.log(
          `${spiders.name} inflige ${spiderDamage} pts de dégats, après cette attaque les points de vie de ${hero.name} sont de ${hero.health}​♥️​, le tour est maintenant terminé`
        );
      for (const element of spider) {
        console.log(fight(hercule, element));
      }
    }
  }
};
for (const element of spider) {
  fight(hercule, element);
}
