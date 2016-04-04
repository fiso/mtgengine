"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlurenBase = require("../setTMP/Aluren.js");

class Aluren extends AlurenBase {
  constructor(game) {
    super(game, "Aluren", "Tempest Remastered", "TPR");
  }
}

module.exports = Aluren;
