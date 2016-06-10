"use strict";
const Constants = require ("../../../Constants");
const AncientZigguratBase = require("../setCON/AncientZiggurat");

class AncientZiggurat extends AncientZigguratBase {
  constructor (game) {
    super(game, "Ancient Ziggurat", "Friday Night Magic", "pFNM");
  }
}

module.exports = AncientZiggurat;
