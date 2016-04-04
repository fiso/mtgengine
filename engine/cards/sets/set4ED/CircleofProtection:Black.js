"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:BlackBase = require("../set6ED/CircleofProtection:Black.js");

class CircleofProtection:Black extends CircleofProtection:BlackBase {
  constructor(game) {
    super(game, "Circle of Protection: Black", "Fourth Edition", "4ED");
  }
}

module.exports = CircleofProtection:Black;
