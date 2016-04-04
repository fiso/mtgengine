"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeechesBase = require("../setHML/Leeches.js");

class Leeches extends LeechesBase {
  constructor(game) {
    super(game, "Leeches", "Masters Edition IV", "ME4");
  }
}

module.exports = Leeches;
