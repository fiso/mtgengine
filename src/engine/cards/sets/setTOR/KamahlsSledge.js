"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamahlsSledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Kamahl's Sledge", "Torment", "TOR");
  }
}

module.exports = KamahlsSledge;
