"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofTears extends Card {
  constructor(game) {
    super(game, "Rain of Tears", "Mercadian Masques", "MMQ");
  }
}

module.exports = RainofTears;
