"use strict";
const Constants = require ("../../../Constants");
const MarbleTitanBase = require("../set9ED/MarbleTitan");

class MarbleTitan extends MarbleTitanBase {
  constructor(game) {
    super(game, "Marble Titan", "Tempest", "TMP");
  }
}

module.exports = MarbleTitan;
