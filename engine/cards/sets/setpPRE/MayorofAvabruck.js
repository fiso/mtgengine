"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MayorofAvabruckBase = require("../setISD/MayorofAvabruck.js");

class MayorofAvabruck extends MayorofAvabruckBase {
  constructor(game) {
    super(game, "Mayor of Avabruck", "Prerelease Events", "pPRE");
  }
}

module.exports = MayorofAvabruck;
