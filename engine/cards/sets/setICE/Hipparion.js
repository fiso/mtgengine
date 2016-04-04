"use strict";
const Constants = require ("../../../Constants");
const HipparionBase = require("../set5ED/Hipparion");

class Hipparion extends HipparionBase {
  constructor(game) {
    super(game, "Hipparion", "Ice Age", "ICE");
  }
}

module.exports = Hipparion;
