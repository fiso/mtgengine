"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralNet extends UnimplementedCard {
  constructor (game) {
    super(game, "Coral Net", "Torment", "TOR");
  }
}

module.exports = CoralNet;
