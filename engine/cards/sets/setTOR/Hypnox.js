"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hypnox extends UnimplementedCard {
  constructor(game) {
    super(game, "Hypnox", "Torment", "TOR");
  }
}

module.exports = Hypnox;
