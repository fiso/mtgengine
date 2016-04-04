"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarbleTitanBase = require("../set9ED/MarbleTitan.js");

class MarbleTitan extends MarbleTitanBase {
  constructor(game) {
    super(game, "Marble Titan", "Tempest", "TMP");
  }
}

module.exports = MarbleTitan;
