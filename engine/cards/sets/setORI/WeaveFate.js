"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeaveFateBase = require("../setKTK/WeaveFate.js");

class WeaveFate extends WeaveFateBase {
  constructor(game) {
    super(game, "Weave Fate", "Magic Origins", "ORI");
  }
}

module.exports = WeaveFate;
