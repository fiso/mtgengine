"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshroudEliteBase = require("../setBRB/SkyshroudElite.js");

class SkyshroudElite extends SkyshroudEliteBase {
  constructor(game) {
    super(game, "Skyshroud Elite", "Exodus", "EXO");
  }
}

module.exports = SkyshroudElite;
