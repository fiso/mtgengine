"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EaterofHopeBase = require("../setBNG/EaterofHope.js");

class EaterofHope extends EaterofHopeBase {
  constructor(game) {
    super(game, "Eater of Hope", "Prerelease Events", "pPRE");
  }
}

module.exports = EaterofHope;
