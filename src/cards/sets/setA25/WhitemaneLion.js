"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhitemaneLion extends UnimplementedCard {
  constructor (game) {
    super(game, "Whitemane Lion", "Masters 25", "A25");
  }
}

module.exports = WhitemaneLion;
