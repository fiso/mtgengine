"use strict";
const Constants = require ("../../../Constants");
const AngelofDeliveranceBase = require("../setSOI/AngelofDeliverance");

class AngelofDeliverance extends AngelofDeliveranceBase {
  constructor (game) {
    super(game, "Angel of Deliverance", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = AngelofDeliverance;
