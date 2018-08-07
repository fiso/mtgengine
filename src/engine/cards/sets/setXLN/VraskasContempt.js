"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VraskasContempt extends UnimplementedCard {
  constructor (game) {
    super(game, "Vraska's Contempt", "Ixalan", "XLN");
  }
}

module.exports = VraskasContempt;
