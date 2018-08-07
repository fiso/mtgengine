"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLegionnaire extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Legionnaire", "Friday Night Magic 2007", "F07");
  }
}

module.exports = GoblinLegionnaire;
