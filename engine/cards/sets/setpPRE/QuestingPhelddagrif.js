"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuestingPhelddagrifBase = require("../setPLS/QuestingPhelddagrif.js");

class QuestingPhelddagrif extends QuestingPhelddagrifBase {
  constructor(game) {
    super(game, "Questing Phelddagrif", "Prerelease Events", "pPRE");
  }
}

module.exports = QuestingPhelddagrif;
