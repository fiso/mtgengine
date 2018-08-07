"use strict";
const Constants = require ("../../../Constants");
const GormtheGreatBase = require("../setPBBD/GormtheGreat");

class GormtheGreat extends GormtheGreatBase {
  constructor (game) {
    super(game, "Gorm the Great", "Battlebond", "BBD");
  }
}

module.exports = GormtheGreat;
