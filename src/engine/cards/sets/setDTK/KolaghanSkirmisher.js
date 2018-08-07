"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KolaghanSkirmisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Kolaghan Skirmisher", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghanSkirmisher;
