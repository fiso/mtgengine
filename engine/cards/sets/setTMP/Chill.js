"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChillBase = require("../setpARL/Chill.js");

class Chill extends ChillBase {
  constructor(game) {
    super(game, "Chill", "Tempest", "TMP");
  }
}

module.exports = Chill;
