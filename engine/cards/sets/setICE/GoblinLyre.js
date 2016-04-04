"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinLyre extends Card {
  constructor(game) {
    super(game, "Goblin Lyre", "Ice Age", "ICE");
  }
}

module.exports = GoblinLyre;
