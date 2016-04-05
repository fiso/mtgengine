"use strict";
const Constants = require ("../../../Constants");
const RegressBase = require("../setMRD/Regress");

class Regress extends RegressBase {
  constructor(game) {
    super(game, "Regress", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Regress;
