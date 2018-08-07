"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dreamstealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreamstealer", "Hour of Devastation", "HOU");
  }
}

module.exports = Dreamstealer;
