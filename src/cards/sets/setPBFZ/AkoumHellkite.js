"use strict";
const Constants = require ("../../../Constants");
const AkoumHellkiteBase = require("../setBFZ/AkoumHellkite");

class AkoumHellkite extends AkoumHellkiteBase {
  constructor (game) {
    super(game, "Akoum Hellkite", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = AkoumHellkite;
