"use strict";
const Constants = require ("../../../Constants");
const GoblinLegionnaireBase = require("../setF07/GoblinLegionnaire");

class GoblinLegionnaire extends GoblinLegionnaireBase {
  constructor (game) {
    super(game, "Goblin Legionnaire", "Apocalypse", "APC");
  }
}

module.exports = GoblinLegionnaire;
