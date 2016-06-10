"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaleRecluse extends UnimplementedCard {
  constructor (game) {
    super(game, "Pale Recluse", "Alara Reborn", "ARB");
  }
}

module.exports = PaleRecluse;
