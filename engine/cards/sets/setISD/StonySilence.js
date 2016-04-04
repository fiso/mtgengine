"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StonySilence extends Card {
  constructor(game) {
    super(game, "Stony Silence", "Innistrad", "ISD");
  }
}

module.exports = StonySilence;
