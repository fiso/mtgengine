"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DutifulServants extends UnimplementedCard {
  constructor (game) {
    super(game, "Dutiful Servants", "Hour of Devastation", "HOU");
  }
}

module.exports = DutifulServants;
