"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyscribingBase = require("../setC13/Skyscribing.js");

class Skyscribing extends SkyscribingBase {
  constructor(game) {
    super(game, "Skyscribing", "Dissension", "DIS");
  }
}

module.exports = Skyscribing;
