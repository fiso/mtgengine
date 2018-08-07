"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverstormSamurai extends UnimplementedCard {
  constructor (game) {
    super(game, "Silverstorm Samurai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SilverstormSamurai;
