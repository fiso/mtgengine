"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurvivorsEncampment extends UnimplementedCard {
  constructor (game) {
    super(game, "Survivors' Encampment", "Hour of Devastation", "HOU");
  }
}

module.exports = SurvivorsEncampment;
