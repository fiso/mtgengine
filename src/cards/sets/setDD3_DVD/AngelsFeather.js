"use strict";
const Constants = require ("../../../Constants");
const AngelsFeatherBase = require("../setDST/AngelsFeather");

class AngelsFeather extends AngelsFeatherBase {
  constructor (game) {
    super(game, "Angel's Feather", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelsFeather;
