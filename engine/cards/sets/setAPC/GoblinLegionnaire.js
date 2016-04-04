"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinLegionnaire extends Card {
  constructor(game) {
    super(game, "Goblin Legionnaire", "Apocalypse", "APC");
  }
}

module.exports = GoblinLegionnaire;
