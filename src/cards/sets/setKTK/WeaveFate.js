"use strict";
const Constants = require ("../../../Constants");
const WeaveFateBase = require("../setORI/WeaveFate");

class WeaveFate extends WeaveFateBase {
  constructor (game) {
    super(game, "Weave Fate", "Khans of Tarkir", "KTK");
  }
}

module.exports = WeaveFate;
