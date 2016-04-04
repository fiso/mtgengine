"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnstableObelisk extends Card {
  constructor(game) {
    super(game, "Unstable Obelisk", "Commander 2014", "C14");
  }
}

module.exports = UnstableObelisk;
