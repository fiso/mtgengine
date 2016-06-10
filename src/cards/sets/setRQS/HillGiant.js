"use strict";
const Constants = require ("../../../Constants");
const HillGiantBase = require("../setCED/HillGiant");

class HillGiant extends HillGiantBase {
  constructor (game) {
    super(game, "Hill Giant", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = HillGiant;
