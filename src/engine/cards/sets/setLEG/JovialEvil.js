"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JovialEvil extends UnimplementedCard {
  constructor (game) {
    super(game, "Jovial Evil", "Legends", "LEG");
  }
}

module.exports = JovialEvil;
