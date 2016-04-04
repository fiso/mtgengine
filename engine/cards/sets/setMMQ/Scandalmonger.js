"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scandalmonger extends Card {
  constructor(game) {
    super(game, "Scandalmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Scandalmonger;
