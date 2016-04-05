"use strict";
const Constants = require ("../../../Constants");
const DuskdaleWurmBase = require("../setDPA/DuskdaleWurm");

class DuskdaleWurm extends DuskdaleWurmBase {
  constructor(game) {
    super(game, "Duskdale Wurm", "Eventide", "EVE");
  }
}

module.exports = DuskdaleWurm;
