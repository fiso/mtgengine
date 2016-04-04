"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtheriumAbomination extends UnimplementedCard {
  constructor(game) {
    super(game, "Etherium Abomination", "Alara Reborn", "ARB");
  }
}

module.exports = EtheriumAbomination;
