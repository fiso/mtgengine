"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamunapExcavator extends UnimplementedCard {
  constructor (game) {
    super(game, "Ramunap Excavator", "Hour of Devastation", "HOU");
  }
}

module.exports = RamunapExcavator;
