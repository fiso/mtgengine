"use strict";
const Constants = require ("../../../Constants");
const DerelorBase = require("../setMED/Derelor");

class Derelor extends DerelorBase {
  constructor (game) {
    super(game, "Derelor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Derelor;
