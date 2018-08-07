"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Champion", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariChampion;
