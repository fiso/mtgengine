"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaccolithWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Laccolith Warrior", "Nemesis", "NMS");
  }
}

module.exports = LaccolithWarrior;
