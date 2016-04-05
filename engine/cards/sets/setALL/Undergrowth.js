"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Undergrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Undergrowth", "Alliances", "ALL");
  }
}

module.exports = Undergrowth;
