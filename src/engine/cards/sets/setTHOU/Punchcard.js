"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Punchcard extends UnimplementedCard {
  constructor (game) {
    super(game, "Punchcard", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = Punchcard;
