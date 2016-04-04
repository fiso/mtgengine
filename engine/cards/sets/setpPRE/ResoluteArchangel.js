"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ResoluteArchangelBase = require("../setM15/ResoluteArchangel.js");

class ResoluteArchangel extends ResoluteArchangelBase {
  constructor(game) {
    super(game, "Resolute Archangel", "Prerelease Events", "pPRE");
  }
}

module.exports = ResoluteArchangel;
