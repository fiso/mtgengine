"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GraniteGargoyleBase = require("../setCED/GraniteGargoyle.js");

class GraniteGargoyle extends GraniteGargoyleBase {
  constructor(game) {
    super(game, "Granite Gargoyle", "Revised Edition", "3ED");
  }
}

module.exports = GraniteGargoyle;
