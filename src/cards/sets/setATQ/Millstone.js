"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Millstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Millstone", "Antiquities", "ATQ");
  }
}

module.exports = Millstone;
