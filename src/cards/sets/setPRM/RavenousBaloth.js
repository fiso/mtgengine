"use strict";
const Constants = require ("../../../Constants");
const RavenousBalothBase = require("../setGVL/RavenousBaloth");

class RavenousBaloth extends RavenousBalothBase {
  constructor (game) {
    super(game, "Ravenous Baloth", "Magic Online Promos", "PRM");
  }
}

module.exports = RavenousBaloth;
