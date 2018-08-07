"use strict";
const Constants = require ("../../../Constants");
const JungleBasinBase = require("../setCMA/JungleBasin");

class JungleBasin extends JungleBasinBase {
  constructor (game) {
    super(game, "Jungle Basin", "Commander 2014", "C14");
  }
}

module.exports = JungleBasin;
