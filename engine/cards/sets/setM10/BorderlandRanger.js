"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorderlandRangerBase = require("../setAVR/BorderlandRanger.js");

class BorderlandRanger extends BorderlandRangerBase {
  constructor(game) {
    super(game, "Borderland Ranger", "Magic 2010", "M10");
  }
}

module.exports = BorderlandRanger;
