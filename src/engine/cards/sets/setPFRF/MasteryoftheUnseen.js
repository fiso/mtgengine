"use strict";
const Constants = require ("../../../Constants");
const MasteryoftheUnseenBase = require("../setFRF/MasteryoftheUnseen");

class MasteryoftheUnseen extends MasteryoftheUnseenBase {
  constructor (game) {
    super(game, "Mastery of the Unseen", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = MasteryoftheUnseen;
