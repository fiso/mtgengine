"use strict";
const Constants = require ("../../../Constants");
const PastinFlamesBase = require("../setMM3/PastinFlames");

class PastinFlames extends PastinFlamesBase {
  constructor (game) {
    super(game, "Past in Flames", "Commander 2016", "C16");
  }
}

module.exports = PastinFlames;
