"use strict";
const Constants = require ("../../../Constants");
const SerumVisionsBase = require("../setMM3/SerumVisions");

class SerumVisions extends SerumVisionsBase {
  constructor (game) {
    super(game, "Serum Visions", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SerumVisions;
