"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DjerusRenunciation extends UnimplementedCard {
  constructor (game) {
    super(game, "Djeru's Renunciation", "Hour of Devastation", "HOU");
  }
}

module.exports = DjerusRenunciation;
