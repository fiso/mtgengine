"use strict";
const Constants = require ("../../../Constants");
const EnervateBase = require("../setME2/Enervate");

class Enervate extends EnervateBase {
  constructor (game) {
    super(game, "Enervate", "Ice Age", "ICE");
  }
}

module.exports = Enervate;
