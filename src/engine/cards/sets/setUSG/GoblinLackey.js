"use strict";
const Constants = require ("../../../Constants");
const GoblinLackeyBase = require("../setVMA/GoblinLackey");

class GoblinLackey extends GoblinLackeyBase {
  constructor (game) {
    super(game, "Goblin Lackey", "Urza's Saga", "USG");
  }
}

module.exports = GoblinLackey;
