"use strict";
const Constants = require ("../../../Constants");
const ChillBase = require("../setpARL/Chill");

class Chill extends ChillBase {
  constructor(game) {
    super(game, "Chill", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Chill;
