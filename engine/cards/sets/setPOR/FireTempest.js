"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireTempestBase = require("../setME4/FireTempest.js");

class FireTempest extends FireTempestBase {
  constructor(game) {
    super(game, "Fire Tempest", "Portal", "POR");
  }
}

module.exports = FireTempest;
