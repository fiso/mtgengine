"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuthlessDisposal extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruthless Disposal", "Eldritch Moon", "EMN");
  }
}

module.exports = RuthlessDisposal;
