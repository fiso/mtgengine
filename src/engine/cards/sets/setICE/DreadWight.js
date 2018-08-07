"use strict";
const Constants = require ("../../../Constants");
const DreadWightBase = require("../setME4/DreadWight");

class DreadWight extends DreadWightBase {
  constructor (game) {
    super(game, "Dread Wight", "Ice Age", "ICE");
  }
}

module.exports = DreadWight;
