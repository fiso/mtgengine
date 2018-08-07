"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JundSojourners extends UnimplementedCard {
  constructor (game) {
    super(game, "Jund Sojourners", "Alara Reborn", "ARB");
  }
}

module.exports = JundSojourners;
