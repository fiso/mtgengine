"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLore extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Lore", "Tenth Edition", "10E");
  }
}

module.exports = GoblinLore;
