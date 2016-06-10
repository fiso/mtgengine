"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor (game) {
    super(game, "Duress", "Media Inserts", "pMEI");
  }
}

module.exports = Duress;
