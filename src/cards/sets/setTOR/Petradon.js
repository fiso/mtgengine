"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Petradon extends UnimplementedCard {
  constructor(game) {
    super(game, "Petradon", "Torment", "TOR");
  }
}

module.exports = Petradon;
