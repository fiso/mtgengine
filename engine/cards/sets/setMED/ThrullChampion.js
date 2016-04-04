"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThrullChampionBase = require("../setFEM/ThrullChampion.js");

class ThrullChampion extends ThrullChampionBase {
  constructor(game) {
    super(game, "Thrull Champion", "Masters Edition", "MED");
  }
}

module.exports = ThrullChampion;
