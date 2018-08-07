"use strict";
const Constants = require ("../../../Constants");
const GoblinLackeyBase = require("../setVMA/GoblinLackey");

class GoblinLackey extends GoblinLackeyBase {
  constructor (game) {
    super(game, "Goblin Lackey", "From the Vault: Exiled", "V09");
  }
}

module.exports = GoblinLackey;
