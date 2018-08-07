"use strict";
const Constants = require ("../../../Constants");
const LoneMissionaryBase = require("../setMM3/LoneMissionary");

class LoneMissionary extends LoneMissionaryBase {
  constructor (game) {
    super(game, "Lone Missionary", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LoneMissionary;
