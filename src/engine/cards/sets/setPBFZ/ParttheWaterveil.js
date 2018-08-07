"use strict";
const Constants = require ("../../../Constants");
const ParttheWaterveilBase = require("../setBFZ/ParttheWaterveil");

class ParttheWaterveil extends ParttheWaterveilBase {
  constructor (game) {
    super(game, "Part the Waterveil", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ParttheWaterveil;
