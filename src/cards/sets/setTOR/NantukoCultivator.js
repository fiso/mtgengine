"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoCultivator extends UnimplementedCard {
  constructor(game) {
    super(game, "Nantuko Cultivator", "Torment", "TOR");
  }
}

module.exports = NantukoCultivator;
