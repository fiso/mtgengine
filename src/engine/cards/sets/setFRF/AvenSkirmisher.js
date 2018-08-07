"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenSkirmisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Skirmisher", "Fate Reforged", "FRF");
  }
}

module.exports = AvenSkirmisher;
