"use strict";
const Constants = require ("../../../Constants");
const AnguishedUnmakingBase = require("../setSOI/AnguishedUnmaking");

class AnguishedUnmaking extends AnguishedUnmakingBase {
  constructor (game) {
    super(game, "Anguished Unmaking", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = AnguishedUnmaking;
