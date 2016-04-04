"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RamosianCaptain extends Card {
  constructor(game) {
    super(game, "Ramosian Captain", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianCaptain;
