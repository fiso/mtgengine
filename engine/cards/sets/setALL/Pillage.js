"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pillage extends UnimplementedCard {
  constructor(game) {
    super(game, "Pillage", "Alliances", "ALL");
  }
}

module.exports = Pillage;
