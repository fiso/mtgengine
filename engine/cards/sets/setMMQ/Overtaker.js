"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overtaker extends Card {
  constructor(game) {
    super(game, "Overtaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Overtaker;
