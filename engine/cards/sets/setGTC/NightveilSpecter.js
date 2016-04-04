"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightveilSpecter extends Card {
  constructor(game) {
    super(game, "Nightveil Specter", "Gatecrash", "GTC");
  }
}

module.exports = NightveilSpecter;
