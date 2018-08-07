"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NagaVitalist extends UnimplementedCard {
  constructor (game) {
    super(game, "Naga Vitalist", "Amonkhet", "AKH");
  }
}

module.exports = NagaVitalist;
