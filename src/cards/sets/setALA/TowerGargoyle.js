"use strict";
const Constants = require ("../../../Constants");
const TowerGargoyleBase = require("../setMM3/TowerGargoyle");

class TowerGargoyle extends TowerGargoyleBase {
  constructor (game) {
    super(game, "Tower Gargoyle", "Shards of Alara", "ALA");
  }
}

module.exports = TowerGargoyle;
