"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamspoilerWitchesBase = require("../setLRW/DreamspoilerWitches.js");

class DreamspoilerWitches extends DreamspoilerWitchesBase {
  constructor(game) {
    super(game, "Dreamspoiler Witches", "Modern Masters", "MMA");
  }
}

module.exports = DreamspoilerWitches;
