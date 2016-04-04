"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadReturnBase = require("../setC14/DreadReturn.js");

class DreadReturn extends DreadReturnBase {
  constructor(game) {
    super(game, "Dread Return", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = DreadReturn;
