"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyInsect extends UnimplementedCard {
  constructor(game) {
    super(game, "Deadly Insect", "Alliances", "ALL");
  }
}

module.exports = DeadlyInsect;
