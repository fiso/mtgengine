"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mightstone extends UnimplementedCard {
  constructor(game) {
    super(game, "Mightstone", "Antiquities", "ATQ");
  }
}

module.exports = Mightstone;
