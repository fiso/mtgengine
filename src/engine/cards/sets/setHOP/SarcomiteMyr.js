"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarcomiteMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Sarcomite Myr", "Planechase", "HOP");
  }
}

module.exports = SarcomiteMyr;
