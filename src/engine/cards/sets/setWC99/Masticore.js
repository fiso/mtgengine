"use strict";
const Constants = require ("../../../Constants");
const MasticoreBase = require("../setVMA/Masticore");

class Masticore extends MasticoreBase {
  constructor (game) {
    super(game, "Masticore", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Masticore;
