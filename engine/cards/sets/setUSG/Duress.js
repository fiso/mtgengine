"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Urza's Saga", "USG");
  }
}

module.exports = Duress;
