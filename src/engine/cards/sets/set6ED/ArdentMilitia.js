"use strict";
const Constants = require ("../../../Constants");
const ArdentMilitiaBase = require("../set8ED/ArdentMilitia");

class ArdentMilitia extends ArdentMilitiaBase {
  constructor (game) {
    super(game, "Ardent Militia", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ArdentMilitia;
