"use strict";
const Constants = require ("../../../Constants");
const JohtullWurmBase = require("../setME2/JohtullWurm");

class JohtullWurm extends JohtullWurmBase {
  constructor (game) {
    super(game, "Johtull Wurm", "Ice Age", "ICE");
  }
}

module.exports = JohtullWurm;
