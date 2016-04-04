"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ornithopter extends UnimplementedCard {
  constructor(game) {
    super(game, "Ornithopter", "Antiquities", "ATQ");
  }
}

module.exports = Ornithopter;
