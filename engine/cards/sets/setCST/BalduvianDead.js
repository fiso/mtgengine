"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalduvianDeadBase = require("../setALL/BalduvianDead.js");

class BalduvianDead extends BalduvianDeadBase {
  constructor(game) {
    super(game, "Balduvian Dead", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = BalduvianDead;
