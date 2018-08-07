"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefulAmmit extends UnimplementedCard {
  constructor (game) {
    super(game, "Baleful Ammit", "Amonkhet", "AKH");
  }
}

module.exports = BalefulAmmit;
