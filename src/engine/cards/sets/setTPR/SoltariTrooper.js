"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariTrooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Trooper", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariTrooper;
