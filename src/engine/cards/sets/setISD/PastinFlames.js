"use strict";
const Constants = require ("../../../Constants");
const PastinFlamesBase = require("../setMM3/PastinFlames");

class PastinFlames extends PastinFlamesBase {
  constructor (game) {
    super(game, "Past in Flames", "Innistrad", "ISD");
  }
}

module.exports = PastinFlames;
