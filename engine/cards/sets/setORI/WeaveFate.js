"use strict";
const Constants = require ("../../../Constants");
const WeaveFateBase = require("../setKTK/WeaveFate");

class WeaveFate extends WeaveFateBase {
  constructor(game) {
    super(game, "Weave Fate", "Magic Origins", "ORI");
  }
}

module.exports = WeaveFate;
