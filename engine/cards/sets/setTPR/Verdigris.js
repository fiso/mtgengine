"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerdigrisBase = require("../setTMP/Verdigris.js");

class Verdigris extends VerdigrisBase {
  constructor(game) {
    super(game, "Verdigris", "Tempest Remastered", "TPR");
  }
}

module.exports = Verdigris;
