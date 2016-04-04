"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarchanterofMogis extends Card {
  constructor(game) {
    super(game, "Warchanter of Mogis", "Born of the Gods", "BNG");
  }
}

module.exports = WarchanterofMogis;
