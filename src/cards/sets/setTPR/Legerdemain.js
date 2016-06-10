"use strict";
const Constants = require ("../../../Constants");
const LegerdemainBase = require("../setTMP/Legerdemain");

class Legerdemain extends LegerdemainBase {
  constructor (game) {
    super(game, "Legerdemain", "Tempest Remastered", "TPR");
  }
}

module.exports = Legerdemain;
