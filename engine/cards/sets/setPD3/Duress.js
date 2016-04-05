"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = Duress;
