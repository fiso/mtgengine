"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillageSurvivors extends UnimplementedCard {
  constructor(game) {
    super(game, "Village Survivors", "Dark Ascension", "DKA");
  }
}

module.exports = VillageSurvivors;
