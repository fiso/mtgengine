"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoldShamblerBase = require("../setC13/MoldShambler.js");

class MoldShambler extends MoldShamblerBase {
  constructor(game) {
    super(game, "Mold Shambler", "Zendikar", "ZEN");
  }
}

module.exports = MoldShambler;
