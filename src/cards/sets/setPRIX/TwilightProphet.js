"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwilightProphet extends UnimplementedCard {
  constructor (game) {
    super(game, "Twilight Prophet", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = TwilightProphet;
