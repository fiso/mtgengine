"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoneMissionaryBase = require("../setDDN/LoneMissionary.js");

class LoneMissionary extends LoneMissionaryBase {
  constructor(game) {
    super(game, "Lone Missionary", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LoneMissionary;
