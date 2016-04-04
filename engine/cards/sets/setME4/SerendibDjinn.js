"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerendibDjinnBase = require("../setARN/SerendibDjinn.js");

class SerendibDjinn extends SerendibDjinnBase {
  constructor(game) {
    super(game, "Serendib Djinn", "Masters Edition IV", "ME4");
  }
}

module.exports = SerendibDjinn;
