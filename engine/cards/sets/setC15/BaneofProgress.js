"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BaneofProgressBase = require("../setC13/BaneofProgress.js");

class BaneofProgress extends BaneofProgressBase {
  constructor(game) {
    super(game, "Bane of Progress", "Commander 2015", "C15");
  }
}

module.exports = BaneofProgress;
