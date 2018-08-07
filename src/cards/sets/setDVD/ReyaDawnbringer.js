"use strict";
const Constants = require ("../../../Constants");
const ReyaDawnbringerBase = require("../setPZ1/ReyaDawnbringer");

class ReyaDawnbringer extends ReyaDawnbringerBase {
  constructor (game) {
    super(game, "Reya Dawnbringer", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = ReyaDawnbringer;
