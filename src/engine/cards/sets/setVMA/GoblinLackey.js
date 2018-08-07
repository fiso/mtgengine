"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLackey extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Lackey", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinLackey;
