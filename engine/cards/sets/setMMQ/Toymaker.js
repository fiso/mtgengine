"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Toymaker extends Card {
  constructor(game) {
    super(game, "Toymaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Toymaker;
