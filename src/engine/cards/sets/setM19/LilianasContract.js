"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasContract extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Contract", "Core Set 2019", "M19");
  }
}

module.exports = LilianasContract;
