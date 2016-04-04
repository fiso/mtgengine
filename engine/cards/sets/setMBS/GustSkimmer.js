"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GustSkimmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Gust-Skimmer", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GustSkimmer;
