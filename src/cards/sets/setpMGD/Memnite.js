"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Memnite extends UnimplementedCard {
  constructor(game) {
    super(game, "Memnite", "Magic Game Day", "pMGD");
  }
}

module.exports = Memnite;
