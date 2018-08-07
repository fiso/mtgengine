"use strict";
const Constants = require ("../../../Constants");
const PortentBase = require("../setC18/Portent");

class Portent extends PortentBase {
  constructor (game) {
    super(game, "Portent", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Portent;
