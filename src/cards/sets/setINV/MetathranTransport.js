"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetathranTransport extends UnimplementedCard {
  constructor(game) {
    super(game, "Metathran Transport", "Invasion", "INV");
  }
}

module.exports = MetathranTransport;
