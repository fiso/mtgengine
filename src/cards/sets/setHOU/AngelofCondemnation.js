"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofCondemnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Condemnation", "Hour of Devastation", "HOU");
  }
}

module.exports = AngelofCondemnation;
