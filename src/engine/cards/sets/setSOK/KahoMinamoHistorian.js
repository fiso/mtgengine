"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KahoMinamoHistorian extends UnimplementedCard {
  constructor (game) {
    super(game, "Kaho, Minamo Historian", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KahoMinamoHistorian;
