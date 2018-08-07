"use strict";
const Constants = require ("../../../Constants");
const EagleoftheWatchBase = require("../setORI/EagleoftheWatch");

class EagleoftheWatch extends EagleoftheWatchBase {
  constructor (game) {
    super(game, "Eagle of the Watch", "Journey into Nyx", "JOU");
  }
}

module.exports = EagleoftheWatch;
