"use strict";
const Constants = require ("../../../Constants");
const JaggedScarArchersBase = require("../setDPA/JaggedScarArchers");

class JaggedScarArchers extends JaggedScarArchersBase {
  constructor(game) {
    super(game, "Jagged-Scar Archers", "Lorwyn", "LRW");
  }
}

module.exports = JaggedScarArchers;
