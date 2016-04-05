"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifebaneZombie extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifebane Zombie", "Magic 2014 Core Set", "M14");
  }
}

module.exports = LifebaneZombie;
