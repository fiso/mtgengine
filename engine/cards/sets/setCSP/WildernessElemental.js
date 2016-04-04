"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildernessElemental extends Card {
  constructor(game) {
    super(game, "Wilderness Elemental", "Coldsnap", "CSP");
  }
}

module.exports = WildernessElemental;
