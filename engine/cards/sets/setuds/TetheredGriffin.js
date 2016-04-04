"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TetheredGriffin extends Card {
  constructor(game) {
    super(game, "Tethered Griffin", "Urza's Destiny", "UDS");
  }
}

module.exports = TetheredGriffin;
