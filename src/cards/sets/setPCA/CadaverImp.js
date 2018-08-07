"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CadaverImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Cadaver Imp", "Planechase Anthology", "PCA");
  }
}

module.exports = CadaverImp;
