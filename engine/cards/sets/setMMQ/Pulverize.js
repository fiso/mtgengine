"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pulverize extends Card {
  constructor(game) {
    super(game, "Pulverize", "Mercadian Masques", "MMQ");
  }
}

module.exports = Pulverize;
