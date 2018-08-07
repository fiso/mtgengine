"use strict";
const Constants = require ("../../../Constants");
const PrairieStreamBase = require("../setBFZ/PrairieStream");

class PrairieStream extends PrairieStreamBase {
  constructor (game) {
    super(game, "Prairie Stream", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = PrairieStream;
