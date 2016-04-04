"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinLoreBase = require("../setPO2/GoblinLore.js");

class GoblinLore extends GoblinLoreBase {
  constructor(game) {
    super(game, "Goblin Lore", "Tenth Edition", "10E");
  }
}

module.exports = GoblinLore;
