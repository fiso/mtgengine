"use strict";
const Constants = require ("../../../Constants");
const JungleBasinBase = require("../setCMA/JungleBasin");

class JungleBasin extends JungleBasinBase {
  constructor (game) {
    super(game, "Jungle Basin", "Visions", "VIS");
  }
}

module.exports = JungleBasin;
