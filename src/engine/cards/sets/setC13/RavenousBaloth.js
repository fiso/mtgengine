"use strict";
const Constants = require ("../../../Constants");
const RavenousBalothBase = require("../setGVL/RavenousBaloth");

class RavenousBaloth extends RavenousBalothBase {
  constructor (game) {
    super(game, "Ravenous Baloth", "Commander 2013", "C13");
  }
}

module.exports = RavenousBaloth;
