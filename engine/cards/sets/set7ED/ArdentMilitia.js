"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArdentMilitiaBase = require("../set6ED/ArdentMilitia.js");

class ArdentMilitia extends ArdentMilitiaBase {
  constructor(game) {
    super(game, "Ardent Militia", "Seventh Edition", "7ED");
  }
}

module.exports = ArdentMilitia;
