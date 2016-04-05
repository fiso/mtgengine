"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLore extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Lore", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinLore;
