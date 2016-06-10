"use strict";
const Constants = require ("../../../Constants");
const ChillBase = require("../setpARL/Chill");

class Chill extends ChillBase {
  constructor (game) {
    super(game, "Chill", "Tempest", "TMP");
  }
}

module.exports = Chill;
