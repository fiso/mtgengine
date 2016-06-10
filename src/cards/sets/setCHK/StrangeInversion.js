"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrangeInversion extends UnimplementedCard {
  constructor (game) {
    super(game, "Strange Inversion", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StrangeInversion;
