"use strict";
const Constants = require ("../../../Constants");
const DustStalkerBase = require("../setBFZ/DustStalker");

class DustStalker extends DustStalkerBase {
  constructor (game) {
    super(game, "Dust Stalker", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = DustStalker;
