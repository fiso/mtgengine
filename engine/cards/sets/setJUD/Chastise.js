"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChastiseBase = require("../set8ED/Chastise.js");

class Chastise extends ChastiseBase {
  constructor(game) {
    super(game, "Chastise", "Judgment", "JUD");
  }
}

module.exports = Chastise;
