"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlacialFortressBase = require("../setM10/GlacialFortress.js");

class GlacialFortress extends GlacialFortressBase {
  constructor(game) {
    super(game, "Glacial Fortress", "Magic 2012", "M12");
  }
}

module.exports = GlacialFortress;
