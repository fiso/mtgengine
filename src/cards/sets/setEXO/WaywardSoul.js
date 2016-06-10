"use strict";
const Constants = require ("../../../Constants");
const WaywardSoulBase = require("../setBTD/WaywardSoul");

class WaywardSoul extends WaywardSoulBase {
  constructor (game) {
    super(game, "Wayward Soul", "Exodus", "EXO");
  }
}

module.exports = WaywardSoul;
