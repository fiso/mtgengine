"use strict";
const Constants = require ("../../../Constants");
const DerelorBase = require("../setMED/Derelor");

class Derelor extends DerelorBase {
  constructor (game) {
    super(game, "Derelor", "Fallen Empires", "FEM");
  }
}

module.exports = Derelor;
