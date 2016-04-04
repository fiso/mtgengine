"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelearnBase = require("../set6ED/Relearn.js");

class Relearn extends RelearnBase {
  constructor(game) {
    super(game, "Relearn", "Weatherlight", "WTH");
  }
}

module.exports = Relearn;
