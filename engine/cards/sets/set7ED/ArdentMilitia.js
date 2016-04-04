"use strict";
const Constants = require ("../../../Constants");
const ArdentMilitiaBase = require("../set6ED/ArdentMilitia");

class ArdentMilitia extends ArdentMilitiaBase {
  constructor(game) {
    super(game, "Ardent Militia", "Seventh Edition", "7ED");
  }
}

module.exports = ArdentMilitia;
