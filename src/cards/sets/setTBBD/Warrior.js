"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Warrior", "Battlebond Tokens", "TBBD");
  }
}

module.exports = Warrior;
