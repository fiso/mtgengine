"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemolishBase = require("../setAVR/Demolish.js");

class Demolish extends DemolishBase {
  constructor(game) {
    super(game, "Demolish", "Eighth Edition", "8ED");
  }
}

module.exports = Demolish;
