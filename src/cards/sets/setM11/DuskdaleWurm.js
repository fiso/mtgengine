"use strict";
const Constants = require ("../../../Constants");
const DuskdaleWurmBase = require("../setDPA/DuskdaleWurm");

class DuskdaleWurm extends DuskdaleWurmBase {
  constructor(game) {
    super(game, "Duskdale Wurm", "Magic 2011", "M11");
  }
}

module.exports = DuskdaleWurm;
