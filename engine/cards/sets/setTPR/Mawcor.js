"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MawcorBase = require("../set7ED/Mawcor.js");

class Mawcor extends MawcorBase {
  constructor(game) {
    super(game, "Mawcor", "Tempest Remastered", "TPR");
  }
}

module.exports = Mawcor;
