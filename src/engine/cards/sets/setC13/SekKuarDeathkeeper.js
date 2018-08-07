"use strict";
const Constants = require ("../../../Constants");
const SekKuarDeathkeeperBase = require("../setOC13/SekKuarDeathkeeper");

class SekKuarDeathkeeper extends SekKuarDeathkeeperBase {
  constructor (game) {
    super(game, "Sek'Kuar, Deathkeeper", "Commander 2013", "C13");
  }
}

module.exports = SekKuarDeathkeeper;
