"use strict";
const Constants = require ("../../../Constants");
const GoblinLoreBase = require("../setPO2/GoblinLore");

class GoblinLore extends GoblinLoreBase {
  constructor (game) {
    super(game, "Goblin Lore", "Tenth Edition", "10E");
  }
}

module.exports = GoblinLore;
