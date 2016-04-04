"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GraypeltRefugeBase = require("../setARC/GraypeltRefuge.js");

class GraypeltRefuge extends GraypeltRefugeBase {
  constructor(game) {
    super(game, "Graypelt Refuge", "Zendikar", "ZEN");
  }
}

module.exports = GraypeltRefuge;
