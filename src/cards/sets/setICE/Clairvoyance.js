"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clairvoyance extends UnimplementedCard {
  constructor(game) {
    super(game, "Clairvoyance", "Ice Age", "ICE");
  }
}

module.exports = Clairvoyance;
