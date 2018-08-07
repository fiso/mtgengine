"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarnScionofUrza extends UnimplementedCard {
  constructor (game) {
    super(game, "Karn, Scion of Urza", "Dominaria", "DOM");
  }
}

module.exports = KarnScionofUrza;
