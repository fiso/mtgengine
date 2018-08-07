"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheMonarch extends UnimplementedCard {
  constructor (game) {
    super(game, "The Monarch", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = TheMonarch;
