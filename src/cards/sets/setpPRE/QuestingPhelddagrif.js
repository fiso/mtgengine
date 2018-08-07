"use strict";
const Constants = require ("../../../Constants");
const QuestingPhelddagrifBase = require("../setTD0/QuestingPhelddagrif");

class QuestingPhelddagrif extends QuestingPhelddagrifBase {
  constructor (game) {
    super(game, "Questing Phelddagrif", "Prerelease Events", "PPRE");
  }
}

module.exports = QuestingPhelddagrif;
