"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BolaWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Bola Warrior", "Nemesis", "NMS");
  }
}

module.exports = BolaWarrior;
