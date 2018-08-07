"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidIllusionist extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Illusionist", "Torment", "TOR");
  }
}

module.exports = CephalidIllusionist;
