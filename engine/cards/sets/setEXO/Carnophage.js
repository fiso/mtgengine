"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carnophage extends UnimplementedCard {
  constructor(game) {
    super(game, "Carnophage", "Exodus", "EXO");
  }
}

module.exports = Carnophage;
