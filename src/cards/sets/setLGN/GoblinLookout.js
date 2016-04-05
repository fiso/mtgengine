"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLookout extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Lookout", "Legions", "LGN");
  }
}

module.exports = GoblinLookout;
