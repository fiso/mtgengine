"use strict";
const Constants = require ("../../../Constants");
const DreadReturnBase = require("../setDDQ/DreadReturn");

class DreadReturn extends DreadReturnBase {
  constructor (game) {
    super(game, "Dread Return", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = DreadReturn;
