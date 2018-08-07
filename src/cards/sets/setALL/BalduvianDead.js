"use strict";
const Constants = require ("../../../Constants");
const BalduvianDeadBase = require("../setME2/BalduvianDead");

class BalduvianDead extends BalduvianDeadBase {
  constructor (game) {
    super(game, "Balduvian Dead", "Alliances", "ALL");
  }
}

module.exports = BalduvianDead;
