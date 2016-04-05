"use strict";
const Constants = require ("../../../Constants");
const BalduvianDeadBase = require("../setALL/BalduvianDead");

class BalduvianDead extends BalduvianDeadBase {
  constructor(game) {
    super(game, "Balduvian Dead", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = BalduvianDead;
