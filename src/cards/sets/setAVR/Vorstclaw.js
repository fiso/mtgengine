"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vorstclaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Vorstclaw", "Avacyn Restored", "AVR");
  }
}

module.exports = Vorstclaw;
