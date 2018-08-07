"use strict";
const Constants = require ("../../../Constants");
const ConduitofRuinBase = require("../setBFZ/ConduitofRuin");

class ConduitofRuin extends ConduitofRuinBase {
  constructor (game) {
    super(game, "Conduit of Ruin", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ConduitofRuin;
