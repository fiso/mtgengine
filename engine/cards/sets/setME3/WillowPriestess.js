"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WillowPriestessBase = require("../setHML/WillowPriestess.js");

class WillowPriestess extends WillowPriestessBase {
  constructor(game) {
    super(game, "Willow Priestess", "Masters Edition III", "ME3");
  }
}

module.exports = WillowPriestess;
