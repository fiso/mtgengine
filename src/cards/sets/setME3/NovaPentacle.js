"use strict";
const Constants = require ("../../../Constants");
const NovaPentacleBase = require("../setLEG/NovaPentacle");

class NovaPentacle extends NovaPentacleBase {
  constructor (game) {
    super(game, "Nova Pentacle", "Masters Edition III", "ME3");
  }
}

module.exports = NovaPentacle;
