"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AurochsHerd extends Card {
  constructor(game) {
    super(game, "Aurochs Herd", "Coldsnap", "CSP");
  }
}

module.exports = AurochsHerd;
