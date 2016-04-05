"use strict";
const Constants = require ("../../../Constants");
const GoblinLegionnaireBase = require("../setAPC/GoblinLegionnaire");

class GoblinLegionnaire extends GoblinLegionnaireBase {
  constructor(game) {
    super(game, "Goblin Legionnaire", "Friday Night Magic", "pFNM");
  }
}

module.exports = GoblinLegionnaire;
