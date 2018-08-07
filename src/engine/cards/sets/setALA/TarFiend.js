"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TarFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Tar Fiend", "Shards of Alara", "ALA");
  }
}

module.exports = TarFiend;
