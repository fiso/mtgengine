"use strict";
const Constants = require ("../../../Constants");
const FertilidBase = require("../setBBD/Fertilid");

class Fertilid extends FertilidBase {
  constructor (game) {
    super(game, "Fertilid", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Fertilid;
