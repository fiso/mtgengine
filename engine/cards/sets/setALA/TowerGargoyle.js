"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TowerGargoyleBase = require("../setC13/TowerGargoyle.js");

class TowerGargoyle extends TowerGargoyleBase {
  constructor(game) {
    super(game, "Tower Gargoyle", "Shards of Alara", "ALA");
  }
}

module.exports = TowerGargoyle;
