"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrimsonManticoreBase = require("../set5ED/CrimsonManticore.js");

class CrimsonManticore extends CrimsonManticoreBase {
  constructor(game) {
    super(game, "Crimson Manticore", "Masters Edition III", "ME3");
  }
}

module.exports = CrimsonManticore;
