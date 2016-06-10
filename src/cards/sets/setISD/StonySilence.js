"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonySilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Stony Silence", "Innistrad", "ISD");
  }
}

module.exports = StonySilence;
