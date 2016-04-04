"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinLookout extends Card {
  constructor(game) {
    super(game, "Goblin Lookout", "Legions", "LGN");
  }
}

module.exports = GoblinLookout;
