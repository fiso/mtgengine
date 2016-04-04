"use strict";
const Constants = require ("../../../Constants");
const QuestingPhelddagrifBase = require("../setPLS/QuestingPhelddagrif");

class QuestingPhelddagrif extends QuestingPhelddagrifBase {
  constructor(game) {
    super(game, "Questing Phelddagrif", "Prerelease Events", "pPRE");
  }
}

module.exports = QuestingPhelddagrif;
