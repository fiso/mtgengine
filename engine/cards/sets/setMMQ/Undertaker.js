"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Undertaker extends Card {
  constructor(game) {
    super(game, "Undertaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Undertaker;
