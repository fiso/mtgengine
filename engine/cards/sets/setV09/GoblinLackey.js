"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinLackey extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Lackey", "From the Vault: Exiled", "V09");
  }
}

module.exports = GoblinLackey;
