"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypt Champion", "Dissension", "DIS");
  }
}

module.exports = CryptChampion;
