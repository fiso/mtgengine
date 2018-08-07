"use strict";
const Constants = require ("../../../Constants");
const NovaPentacleBase = require("../setME3/NovaPentacle");

class NovaPentacle extends NovaPentacleBase {
  constructor (game) {
    super(game, "Nova Pentacle", "Legends", "LEG");
  }
}

module.exports = NovaPentacle;
