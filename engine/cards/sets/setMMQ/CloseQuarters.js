"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloseQuarters extends Card {
  constructor(game) {
    super(game, "Close Quarters", "Mercadian Masques", "MMQ");
  }
}

module.exports = CloseQuarters;
