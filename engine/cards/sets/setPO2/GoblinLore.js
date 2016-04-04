"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinLore extends Card {
  constructor(game) {
    super(game, "Goblin Lore", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinLore;
