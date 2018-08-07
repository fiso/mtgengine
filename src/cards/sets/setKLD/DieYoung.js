"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DieYoung extends UnimplementedCard {
  constructor (game) {
    super(game, "Die Young", "Kaladesh", "KLD");
  }
}

module.exports = DieYoung;
