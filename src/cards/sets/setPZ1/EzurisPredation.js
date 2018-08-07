"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EzurisPredation extends UnimplementedCard {
  constructor (game) {
    super(game, "Ezuri's Predation", "Legendary Cube", "PZ1");
  }
}

module.exports = EzurisPredation;
