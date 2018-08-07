"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GormtheGreat extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorm the Great", "Battlebond Promos", "PBBD");
  }
}

module.exports = GormtheGreat;
