"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiligreeSages extends UnimplementedCard {
  constructor (game) {
    super(game, "Filigree Sages", "Shards of Alara", "ALA");
  }
}

module.exports = FiligreeSages;
