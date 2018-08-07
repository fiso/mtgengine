"use strict";
const Constants = require ("../../../Constants");
const WorshipBase = require("../setMP2/Worship");

class Worship extends WorshipBase {
  constructor (game) {
    super(game, "Worship", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Worship;
