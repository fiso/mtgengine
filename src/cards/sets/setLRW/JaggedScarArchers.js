"use strict";
const Constants = require ("../../../Constants");
const JaggedScarArchersBase = require("../setDDU/JaggedScarArchers");

class JaggedScarArchers extends JaggedScarArchersBase {
  constructor (game) {
    super(game, "Jagged-Scar Archers", "Lorwyn", "LRW");
  }
}

module.exports = JaggedScarArchers;
