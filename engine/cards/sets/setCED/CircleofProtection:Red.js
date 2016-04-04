"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:RedBase = require("../set6ED/CircleofProtection:Red.js");

class CircleofProtection:Red extends CircleofProtection:RedBase {
  constructor(game) {
    super(game, "Circle of Protection: Red", "Collector's Edition", "CED");
  }
}

module.exports = CircleofProtection:Red;
