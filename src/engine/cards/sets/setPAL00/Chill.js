"use strict";
const Constants = require ("../../../Constants");
const ChillBase = require("../setPRM/Chill");

class Chill extends ChillBase {
  constructor (game) {
    super(game, "Chill", "Arena League 2000", "PAL00");
  }
}

module.exports = Chill;
