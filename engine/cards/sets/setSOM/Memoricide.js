"use strict";
const Constants = require ("../../../Constants");
const MemoricideBase = require("../setpMEI/Memoricide");

class Memoricide extends MemoricideBase {
  constructor(game) {
    super(game, "Memoricide", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Memoricide;
