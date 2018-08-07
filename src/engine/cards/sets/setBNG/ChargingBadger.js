"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingBadger extends UnimplementedCard {
  constructor (game) {
    super(game, "Charging Badger", "Born of the Gods", "BNG");
  }
}

module.exports = ChargingBadger;
