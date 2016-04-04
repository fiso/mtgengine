"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LotusPetal extends UnimplementedCard {
  constructor(game) {
    super(game, "Lotus Petal", "From the Vault: Exiled", "V09");
  }
}

module.exports = LotusPetal;
