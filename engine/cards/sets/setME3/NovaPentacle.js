"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NovaPentacleBase = require("../setLEG/NovaPentacle.js");

class NovaPentacle extends NovaPentacleBase {
  constructor(game) {
    super(game, "Nova Pentacle", "Masters Edition III", "ME3");
  }
}

module.exports = NovaPentacle;
