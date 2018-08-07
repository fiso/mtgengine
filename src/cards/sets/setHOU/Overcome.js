"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overcome extends UnimplementedCard {
  constructor (game) {
    super(game, "Overcome", "Hour of Devastation", "HOU");
  }
}

module.exports = Overcome;
