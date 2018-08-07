"use strict";
const Constants = require ("../../../Constants");
const DodecapodBase = require("../setTSB/Dodecapod");

class Dodecapod extends DodecapodBase {
  constructor (game) {
    super(game, "Dodecapod", "Apocalypse", "APC");
  }
}

module.exports = Dodecapod;
