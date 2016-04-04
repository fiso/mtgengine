"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientZigguratBase = require("../setCON/AncientZiggurat.js");

class AncientZiggurat extends AncientZigguratBase {
  constructor(game) {
    super(game, "Ancient Ziggurat", "Friday Night Magic", "pFNM");
  }
}

module.exports = AncientZiggurat;
