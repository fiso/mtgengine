"use strict";
const Constants = require ("../../../Constants");
const AncientZigguratBase = require("../setF10/AncientZiggurat");

class AncientZiggurat extends AncientZigguratBase {
  constructor (game) {
    super(game, "Ancient Ziggurat", "Magic Online Promos", "PRM");
  }
}

module.exports = AncientZiggurat;
