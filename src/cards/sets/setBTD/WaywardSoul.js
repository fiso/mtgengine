"use strict";
const Constants = require ("../../../Constants");
const WaywardSoulBase = require("../setTPR/WaywardSoul");

class WaywardSoul extends WaywardSoulBase {
  constructor (game) {
    super(game, "Wayward Soul", "Beatdown Box Set", "BTD");
  }
}

module.exports = WaywardSoul;
