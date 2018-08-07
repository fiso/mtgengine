"use strict";
const Constants = require ("../../../Constants");
const SerumVisionsBase = require("../setMM3/SerumVisions");

class SerumVisions extends SerumVisionsBase {
  constructor (game) {
    super(game, "Serum Visions", "Arena League 2004", "PAL04");
  }
}

module.exports = SerumVisions;
