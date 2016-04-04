"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshaperBase = require("../setEXO/Skyshaper.js");

class Skyshaper extends SkyshaperBase {
  constructor(game) {
    super(game, "Skyshaper", "Tempest Remastered", "TPR");
  }
}

module.exports = Skyshaper;
