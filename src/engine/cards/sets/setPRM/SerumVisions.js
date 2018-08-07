"use strict";
const Constants = require ("../../../Constants");
const SerumVisionsBase = require("../setMM3/SerumVisions");

class SerumVisions extends SerumVisionsBase {
  constructor (game) {
    super(game, "Serum Visions", "Magic Online Promos", "PRM");
  }
}

module.exports = SerumVisions;
