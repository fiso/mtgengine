"use strict";
const Constants = require ("../../../Constants");
const SkirkShamanBase = require("../setEVG/SkirkShaman");

class SkirkShaman extends SkirkShamanBase {
  constructor (game) {
    super(game, "Skirk Shaman", "Planar Chaos", "PLC");
  }
}

module.exports = SkirkShaman;
