"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderDragonBase = require("../setDDG/ThunderDragon.js");

class ThunderDragon extends ThunderDragonBase {
  constructor(game) {
    super(game, "Thunder Dragon", "From the Vault: Dragons", "DRB");
  }
}

module.exports = ThunderDragon;
