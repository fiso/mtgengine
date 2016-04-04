"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaggedScarArchersBase = require("../setDPA/JaggedScarArchers.js");

class JaggedScarArchers extends JaggedScarArchersBase {
  constructor(game) {
    super(game, "Jagged-Scar Archers", "Lorwyn", "LRW");
  }
}

module.exports = JaggedScarArchers;
