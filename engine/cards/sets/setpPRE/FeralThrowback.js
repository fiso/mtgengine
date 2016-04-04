"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeralThrowbackBase = require("../setLGN/FeralThrowback.js");

class FeralThrowback extends FeralThrowbackBase {
  constructor(game) {
    super(game, "Feral Throwback", "Prerelease Events", "pPRE");
  }
}

module.exports = FeralThrowback;
