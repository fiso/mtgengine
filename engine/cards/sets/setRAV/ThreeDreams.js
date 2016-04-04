"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThreeDreamsBase = require("../setPC2/ThreeDreams.js");

class ThreeDreams extends ThreeDreamsBase {
  constructor(game) {
    super(game, "Three Dreams", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ThreeDreams;
