"use strict";
const Constants = require ("../../../Constants");
const WildernessElementalBase = require("../setC16/WildernessElemental");

class WildernessElemental extends WildernessElementalBase {
  constructor (game) {
    super(game, "Wilderness Elemental", "Coldsnap", "CSP");
  }
}

module.exports = WildernessElemental;
