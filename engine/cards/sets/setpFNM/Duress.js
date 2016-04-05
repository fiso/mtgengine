"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Friday Night Magic", "pFNM");
  }
}

module.exports = Duress;
