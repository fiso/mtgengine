"use strict";
const Constants = require ("../../../Constants");
const RavenousBalothBase = require("../setGVL/RavenousBaloth");

class RavenousBaloth extends RavenousBalothBase {
  constructor (game) {
    super(game, "Ravenous Baloth", "Judge Gift Cards 2007", "G07");
  }
}

module.exports = RavenousBaloth;
