"use strict";
const Constants = require ("../../../Constants");
const AnguishedUnmakingBase = require("../setSOI/AnguishedUnmaking");

class AnguishedUnmaking extends AnguishedUnmakingBase {
  constructor (game) {
    super(game, "Anguished Unmaking", "Magic Online Promos", "PRM");
  }
}

module.exports = AnguishedUnmaking;
