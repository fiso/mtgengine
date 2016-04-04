"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeeryFogbeast extends Card {
  constructor(game) {
    super(game, "Leery Fogbeast", "Onslaught", "ONS");
  }
}

module.exports = LeeryFogbeast;
