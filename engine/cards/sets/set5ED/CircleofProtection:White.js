"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:WhiteBase = require("../set6ED/CircleofProtection:White.js");

class CircleofProtection:White extends CircleofProtection:WhiteBase {
  constructor(game) {
    super(game, "Circle of Protection: White", "Fifth Edition", "5ED");
  }
}

module.exports = CircleofProtection:White;
