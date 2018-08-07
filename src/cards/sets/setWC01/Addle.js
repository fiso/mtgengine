"use strict";
const Constants = require ("../../../Constants");
const AddleBase = require("../setVMA/Addle");

class Addle extends AddleBase {
  constructor (game) {
    super(game, "Addle", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Addle;
