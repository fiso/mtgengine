"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JayaBallardEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Jaya Ballard Emblem", "Dominaria Tokens", "TDOM");
  }
}

module.exports = JayaBallardEmblem;
