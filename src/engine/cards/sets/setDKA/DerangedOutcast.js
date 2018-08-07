"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DerangedOutcast extends UnimplementedCard {
  constructor (game) {
    super(game, "Deranged Outcast", "Dark Ascension", "DKA");
  }
}

module.exports = DerangedOutcast;
