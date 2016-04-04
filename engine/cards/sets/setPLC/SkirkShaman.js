"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirkShamanBase = require("../setDD3_EVG/SkirkShaman.js");

class SkirkShaman extends SkirkShamanBase {
  constructor(game) {
    super(game, "Skirk Shaman", "Planar Chaos", "PLC");
  }
}

module.exports = SkirkShaman;
