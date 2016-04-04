"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HornofDeafeningBase = require("../setCHR/HornofDeafening.js");

class HornofDeafening extends HornofDeafeningBase {
  constructor(game) {
    super(game, "Horn of Deafening", "Masters Edition IV", "ME4");
  }
}

module.exports = HornofDeafening;
