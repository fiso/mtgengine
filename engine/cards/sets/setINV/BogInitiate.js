"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogInitiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Bog Initiate", "Invasion", "INV");
  }
}

module.exports = BogInitiate;
