"use strict";
const Constants = require ("../../../Constants");
const RavenousBalothBase = require("../setC13/RavenousBaloth");

class RavenousBaloth extends RavenousBalothBase {
  constructor(game) {
    super(game, "Ravenous Baloth", "Judge Gift Program", "pJGP");
  }
}

module.exports = RavenousBaloth;
