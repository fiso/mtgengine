"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLyre extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Lyre", "Ice Age", "ICE");
  }
}

module.exports = GoblinLyre;
