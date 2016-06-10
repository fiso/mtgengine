"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValakuttheMoltenPinnacle extends UnimplementedCard {
  constructor (game) {
    super(game, "Valakut, the Molten Pinnacle", "Launch Parties", "pLPA");
  }
}

module.exports = ValakuttheMoltenPinnacle;
