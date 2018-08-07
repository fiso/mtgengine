"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StruggleSurvive extends UnimplementedCard {
  constructor (game) {
    super(game, "Struggle // Survive", "Hour of Devastation", "HOU");
  }
}

module.exports = StruggleSurvive;
