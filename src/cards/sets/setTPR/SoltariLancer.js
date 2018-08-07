"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Lancer", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariLancer;
