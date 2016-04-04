"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinLegionnaireBase = require("../setAPC/GoblinLegionnaire.js");

class GoblinLegionnaire extends GoblinLegionnaireBase {
  constructor(game) {
    super(game, "Goblin Legionnaire", "Friday Night Magic", "pFNM");
  }
}

module.exports = GoblinLegionnaire;
