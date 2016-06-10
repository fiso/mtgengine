"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NayaSojourners extends UnimplementedCard {
  constructor (game) {
    super(game, "Naya Sojourners", "Alara Reborn", "ARB");
  }
}

module.exports = NayaSojourners;
