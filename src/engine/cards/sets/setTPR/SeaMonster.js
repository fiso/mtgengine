"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Monster", "Tempest Remastered", "TPR");
  }
}

module.exports = SeaMonster;
