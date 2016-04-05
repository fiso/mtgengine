"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuestingPhelddagrif extends UnimplementedCard {
  constructor(game) {
    super(game, "Questing Phelddagrif", "Planeshift", "PLS");
  }
}

module.exports = QuestingPhelddagrif;
