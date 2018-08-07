"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResoluteSurvivors extends UnimplementedCard {
  constructor (game) {
    super(game, "Resolute Survivors", "Hour of Devastation", "HOU");
  }
}

module.exports = ResoluteSurvivors;
