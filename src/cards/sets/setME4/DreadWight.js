"use strict";
const Constants = require ("../../../Constants");
const DreadWightBase = require("../setICE/DreadWight");

class DreadWight extends DreadWightBase {
  constructor (game) {
    super(game, "Dread Wight", "Masters Edition IV", "ME4");
  }
}

module.exports = DreadWight;
