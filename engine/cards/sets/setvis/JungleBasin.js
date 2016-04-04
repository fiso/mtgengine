"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JungleBasinBase = require("../setC14/JungleBasin.js");

class JungleBasin extends JungleBasinBase {
  constructor(game) {
    super(game, "Jungle Basin", "Visions", "VIS");
  }
}

module.exports = JungleBasin;
