"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrushUnderfootBase = require("../setLRW/CrushUnderfoot.js");

class CrushUnderfoot extends CrushUnderfootBase {
  constructor(game) {
    super(game, "Crush Underfoot", "Modern Masters", "MMA");
  }
}

module.exports = CrushUnderfoot;
