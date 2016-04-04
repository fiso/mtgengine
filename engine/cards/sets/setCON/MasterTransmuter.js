"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasterTransmuterBase = require("../setARC/MasterTransmuter.js");

class MasterTransmuter extends MasterTransmuterBase {
  constructor(game) {
    super(game, "Master Transmuter", "Conflux", "CON");
  }
}

module.exports = MasterTransmuter;
