"use strict";
const Constants = require ("../../../Constants");
const JungleBasinBase = require("../setC14/JungleBasin");

class JungleBasin extends JungleBasinBase {
  constructor(game) {
    super(game, "Jungle Basin", "Visions", "VIS");
  }
}

module.exports = JungleBasin;
