"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OvertakerBase = require("../setMMQ/Overtaker.js");

class Overtaker extends OvertakerBase {
  constructor(game) {
    super(game, "Overtaker", "Prerelease Events", "pPRE");
  }
}

module.exports = Overtaker;
