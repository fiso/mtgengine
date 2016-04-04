"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuestfortheHolyRelic extends Card {
  constructor(game) {
    super(game, "Quest for the Holy Relic", "Zendikar", "ZEN");
  }
}

module.exports = QuestfortheHolyRelic;
