"use strict";
const Constants = require ("../../../Constants");
const ForeseeBase = require("../setFUT/Foresee");

class Foresee extends ForeseeBase {
  constructor(game) {
    super(game, "Foresee", "Magic 2011", "M11");
  }
}

module.exports = Foresee;
