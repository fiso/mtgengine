"use strict";
const Constants = require ("../../../Constants");
const AngelsFeatherBase = require("../setDVD/AngelsFeather");

class AngelsFeather extends AngelsFeatherBase {
  constructor (game) {
    super(game, "Angel's Feather", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AngelsFeather;
