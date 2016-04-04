"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SadisticSacrament extends UnimplementedCard {
  constructor(game) {
    super(game, "Sadistic Sacrament", "Zendikar", "ZEN");
  }
}

module.exports = SadisticSacrament;
