"use strict";
const Constants = require ("../../../Constants");
const QuestfortheGravelordBase = require("../setBBD/QuestfortheGravelord");

class QuestfortheGravelord extends QuestfortheGravelordBase {
  constructor (game) {
    super(game, "Quest for the Gravelord", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = QuestfortheGravelord;
