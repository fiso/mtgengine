"use strict";
const Constants = require ("../../../Constants");
const SekKuarDeathkeeperBase = require("../setCSP/SekKuarDeathkeeper");

class SekKuarDeathkeeper extends SekKuarDeathkeeperBase {
  constructor(game) {
    super(game, "Sek'Kuar, Deathkeeper", "Commander 2013 Edition", "C13");
  }
}

module.exports = SekKuarDeathkeeper;
