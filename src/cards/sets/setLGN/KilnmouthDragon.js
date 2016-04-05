"use strict";
const Constants = require ("../../../Constants");
const KilnmouthDragonBase = require("../setARC/KilnmouthDragon");

class KilnmouthDragon extends KilnmouthDragonBase {
  constructor(game) {
    super(game, "Kilnmouth Dragon", "Legions", "LGN");
  }
}

module.exports = KilnmouthDragon;
