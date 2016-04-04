"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VitalizeBase = require("../set6ED/Vitalize.js");

class Vitalize extends VitalizeBase {
  constructor(game) {
    super(game, "Vitalize", "Weatherlight", "WTH");
  }
}

module.exports = Vitalize;
