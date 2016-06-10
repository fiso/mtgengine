"use strict";
const Constants = require ("../../../Constants");
const RepeltheDarknessBase = require("../setDDP/RepeltheDarkness");

class RepeltheDarkness extends RepeltheDarknessBase {
  constructor (game) {
    super(game, "Repel the Darkness", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RepeltheDarkness;
