"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrozenSolid extends Card {
  constructor(game) {
    super(game, "Frozen Solid", "Coldsnap", "CSP");
  }
}

module.exports = FrozenSolid;
