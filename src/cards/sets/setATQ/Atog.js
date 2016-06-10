"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Atog extends UnimplementedCard {
  constructor (game) {
    super(game, "Atog", "Antiquities", "ATQ");
  }
}

module.exports = Atog;
