"use strict";
const Constants = require ("../../../Constants");
const SilverfurPartisanBase = require("../setSOI/SilverfurPartisan");

class SilverfurPartisan extends SilverfurPartisanBase {
  constructor (game) {
    super(game, "Silverfur Partisan", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SilverfurPartisan;
