"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemolishBase = require("../setAVR/Demolish.js");

class Demolish extends DemolishBase {
  constructor(game) {
    super(game, "Demolish", "Magic 2011", "M11");
  }
}

module.exports = Demolish;
