"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinLackey extends Card {
  constructor(game) {
    super(game, "Goblin Lackey", "From the Vault: Exiled", "V09");
  }
}

module.exports = GoblinLackey;
