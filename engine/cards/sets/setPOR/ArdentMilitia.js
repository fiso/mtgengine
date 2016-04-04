"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArdentMilitiaBase = require("../set6ED/ArdentMilitia.js");

class ArdentMilitia extends ArdentMilitiaBase {
  constructor(game) {
    super(game, "Ardent Militia", "Portal", "POR");
  }
}

module.exports = ArdentMilitia;
