"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLegionnaire extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Legionnaire", "Apocalypse", "APC");
  }
}

module.exports = GoblinLegionnaire;
