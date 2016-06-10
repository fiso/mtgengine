"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporaryTruce extends UnimplementedCard {
  constructor (game) {
    super(game, "Temporary Truce", "Portal", "POR");
  }
}

module.exports = TemporaryTruce;
