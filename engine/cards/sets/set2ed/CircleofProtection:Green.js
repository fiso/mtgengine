"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:GreenBase = require("../set6ED/CircleofProtection:Green.js");

class CircleofProtection:Green extends CircleofProtection:GreenBase {
  constructor(game) {
    super(game, "Circle of Protection: Green", "Unlimited Edition", "2ED");
  }
}

module.exports = CircleofProtection:Green;
