"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShrewdHatchlingBase = require("../setDDJ/ShrewdHatchling.js");

class ShrewdHatchling extends ShrewdHatchlingBase {
  constructor(game) {
    super(game, "Shrewd Hatchling", "Eventide", "EVE");
  }
}

module.exports = ShrewdHatchling;
