"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinLackeyBase = require("../setV09/GoblinLackey.js");

class GoblinLackey extends GoblinLackeyBase {
  constructor(game) {
    super(game, "Goblin Lackey", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinLackey;
