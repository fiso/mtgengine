"use strict";
const Constants = require ("../../../Constants");
const AngelofDeliveranceBase = require("../setSOI/AngelofDeliverance");

class AngelofDeliverance extends AngelofDeliveranceBase {
  constructor (game) {
    super(game, "Angel of Deliverance", "Magic Online Promos", "PRM");
  }
}

module.exports = AngelofDeliverance;
