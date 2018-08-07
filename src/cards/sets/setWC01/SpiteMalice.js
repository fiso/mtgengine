"use strict";
const Constants = require ("../../../Constants");
const SpiteMaliceBase = require("../setDDH/SpiteMalice");

class SpiteMalice extends SpiteMaliceBase {
  constructor (game) {
    super(game, "Spite // Malice", "World Championship Decks 2001", "WC01");
  }
}

module.exports = SpiteMalice;
