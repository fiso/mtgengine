"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderDragonBase = require("../setDDG/ThunderDragon.js");

class ThunderDragon extends ThunderDragonBase {
  constructor(game) {
    super(game, "Thunder Dragon", "Starter 1999", "S99");
  }
}

module.exports = ThunderDragon;
