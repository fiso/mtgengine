"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadWightBase = require("../setICE/DreadWight.js");

class DreadWight extends DreadWightBase {
  constructor(game) {
    super(game, "Dread Wight", "Masters Edition IV", "ME4");
  }
}

module.exports = DreadWight;
