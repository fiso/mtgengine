"use strict";
const Constants = require ("../../../Constants");
const PortTownBase = require("../setSOI/PortTown");

class PortTown extends PortTownBase {
  constructor (game) {
    super(game, "Port Town", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = PortTown;
