"use strict";
const Constants = require ("../../../Constants");
const GoblinLegionnaireBase = require("../setF07/GoblinLegionnaire");

class GoblinLegionnaire extends GoblinLegionnaireBase {
  constructor (game) {
    super(game, "Goblin Legionnaire", "Magic Online Promos", "PRM");
  }
}

module.exports = GoblinLegionnaire;
