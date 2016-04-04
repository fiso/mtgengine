"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaywardSoulBase = require("../setBTD/WaywardSoul.js");

class WaywardSoul extends WaywardSoulBase {
  constructor(game) {
    super(game, "Wayward Soul", "Tempest Remastered", "TPR");
  }
}

module.exports = WaywardSoul;
