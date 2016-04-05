"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrallenhordeKiller extends UnimplementedCard {
  constructor(game) {
    super(game, "Krallenhorde Killer", "Dark Ascension", "DKA");
  }
}

module.exports = KrallenhordeKiller;
