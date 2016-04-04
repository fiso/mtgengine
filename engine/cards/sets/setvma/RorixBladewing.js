"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RorixBladewingBase = require("../setONS/RorixBladewing.js");

class RorixBladewing extends RorixBladewingBase {
  constructor(game) {
    super(game, "Rorix Bladewing", "Vintage Masters", "VMA");
  }
}

module.exports = RorixBladewing;
