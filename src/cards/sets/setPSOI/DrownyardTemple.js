"use strict";
const Constants = require ("../../../Constants");
const DrownyardTempleBase = require("../setSOI/DrownyardTemple");

class DrownyardTemple extends DrownyardTempleBase {
  constructor (game) {
    super(game, "Drownyard Temple", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = DrownyardTemple;
