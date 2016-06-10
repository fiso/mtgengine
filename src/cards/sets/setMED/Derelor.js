"use strict";
const Constants = require ("../../../Constants");
const DerelorBase = require("../set6ED/Derelor");

class Derelor extends DerelorBase {
  constructor (game) {
    super(game, "Derelor", "Masters Edition", "MED");
  }
}

module.exports = Derelor;
