"use strict";
const Constants = require ("../../../Constants");
const ArdentMilitiaBase = require("../set8ED/ArdentMilitia");

class ArdentMilitia extends ArdentMilitiaBase {
  constructor (game) {
    super(game, "Ardent Militia", "Weatherlight", "WTH");
  }
}

module.exports = ArdentMilitia;
