"use strict";
const Constants = require ("../../../Constants");
const BonesplitterBase = require("../setMMA/Bonesplitter");

class Bonesplitter extends BonesplitterBase {
  constructor (game) {
    super(game, "Bonesplitter", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Bonesplitter;
