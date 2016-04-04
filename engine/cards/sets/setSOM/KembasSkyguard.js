"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KembasSkyguardBase = require("../setDDF/KembasSkyguard.js");

class KembasSkyguard extends KembasSkyguardBase {
  constructor(game) {
    super(game, "Kemba's Skyguard", "Scars of Mirrodin", "SOM");
  }
}

module.exports = KembasSkyguard;
