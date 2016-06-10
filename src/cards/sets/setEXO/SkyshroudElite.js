"use strict";
const Constants = require ("../../../Constants");
const SkyshroudEliteBase = require("../setBRB/SkyshroudElite");

class SkyshroudElite extends SkyshroudEliteBase {
  constructor (game) {
    super(game, "Skyshroud Elite", "Exodus", "EXO");
  }
}

module.exports = SkyshroudElite;
