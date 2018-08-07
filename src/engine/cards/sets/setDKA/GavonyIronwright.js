"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GavonyIronwright extends UnimplementedCard {
  constructor (game) {
    super(game, "Gavony Ironwright", "Dark Ascension", "DKA");
  }
}

module.exports = GavonyIronwright;
