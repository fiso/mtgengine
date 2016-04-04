"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShrewdHatchlingBase = require("../setDDJ/ShrewdHatchling.js");

class ShrewdHatchling extends ShrewdHatchlingBase {
  constructor(game) {
    super(game, "Shrewd Hatchling", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ShrewdHatchling;
