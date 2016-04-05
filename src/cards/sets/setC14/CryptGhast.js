"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptGhast extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypt Ghast", "Commander 2014", "C14");
  }
}

module.exports = CryptGhast;
