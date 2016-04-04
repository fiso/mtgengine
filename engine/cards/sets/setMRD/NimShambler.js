"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimShambler extends Card {
  constructor(game) {
    super(game, "Nim Shambler", "Mirrodin", "MRD");
  }
}

module.exports = NimShambler;
