"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuestfortheHolyRelic extends UnimplementedCard {
  constructor(game) {
    super(game, "Quest for the Holy Relic", "Zendikar", "ZEN");
  }
}

module.exports = QuestfortheHolyRelic;
