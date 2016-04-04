"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SekKuarDeathkeeperBase = require("../setCSP/SekKuarDeathkeeper.js");

class SekKuarDeathkeeper extends SekKuarDeathkeeperBase {
  constructor(game) {
    super(game, "Sek'Kuar, Deathkeeper", "Commander 2013 Edition", "C13");
  }
}

module.exports = SekKuarDeathkeeper;
