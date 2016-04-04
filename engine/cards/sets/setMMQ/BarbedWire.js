"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbedWire extends Card {
  constructor(game) {
    super(game, "Barbed Wire", "Mercadian Masques", "MMQ");
  }
}

module.exports = BarbedWire;
