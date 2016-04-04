"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghoultree extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghoultree", "Dark Ascension", "DKA");
  }
}

module.exports = Ghoultree;
