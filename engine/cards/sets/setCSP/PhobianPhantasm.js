"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhobianPhantasm extends Card {
  constructor(game) {
    super(game, "Phobian Phantasm", "Coldsnap", "CSP");
  }
}

module.exports = PhobianPhantasm;
