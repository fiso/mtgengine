"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvalancheTuskerBase = require("../setKTK/AvalancheTusker.js");

class AvalancheTusker extends AvalancheTuskerBase {
  constructor(game) {
    super(game, "Avalanche Tusker", "Media Inserts", "pMEI");
  }
}

module.exports = AvalancheTusker;
