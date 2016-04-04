"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrownedBase = require("../setME4/Drowned.js");

class Drowned extends DrownedBase {
  constructor(game) {
    super(game, "Drowned", "The Dark", "DRK");
  }
}

module.exports = Drowned;
