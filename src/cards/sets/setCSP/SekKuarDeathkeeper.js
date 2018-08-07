"use strict";
const Constants = require ("../../../Constants");
const SekKuarDeathkeeperBase = require("../setOC13/SekKuarDeathkeeper");

class SekKuarDeathkeeper extends SekKuarDeathkeeperBase {
  constructor (game) {
    super(game, "Sek'Kuar, Deathkeeper", "Coldsnap", "CSP");
  }
}

module.exports = SekKuarDeathkeeper;
