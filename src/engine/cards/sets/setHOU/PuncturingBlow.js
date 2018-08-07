"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuncturingBlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Puncturing Blow", "Hour of Devastation", "HOU");
  }
}

module.exports = PuncturingBlow;
