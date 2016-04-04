"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GraniteGargoyleBase = require("../setCED/GraniteGargoyle.js");

class GraniteGargoyle extends GraniteGargoyleBase {
  constructor(game) {
    super(game, "Granite Gargoyle", "International Collector's Edition", "CEI");
  }
}

module.exports = GraniteGargoyle;
