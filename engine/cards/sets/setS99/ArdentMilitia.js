"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArdentMilitiaBase = require("../set6ED/ArdentMilitia.js");

class ArdentMilitia extends ArdentMilitiaBase {
  constructor(game) {
    super(game, "Ardent Militia", "Starter 1999", "S99");
  }
}

module.exports = ArdentMilitia;
