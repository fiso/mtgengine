"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfestBase = require("../setARC/Infest.js");

class Infest extends InfestBase {
  constructor(game) {
    super(game, "Infest", "Onslaught", "ONS");
  }
}

module.exports = Infest;
