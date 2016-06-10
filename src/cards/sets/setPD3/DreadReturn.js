"use strict";
const Constants = require ("../../../Constants");
const DreadReturnBase = require("../setC14/DreadReturn");

class DreadReturn extends DreadReturnBase {
  constructor (game) {
    super(game, "Dread Return", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = DreadReturn;
