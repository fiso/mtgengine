"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Weakstone extends UnimplementedCard {
  constructor(game) {
    super(game, "Weakstone", "Antiquities", "ATQ");
  }
}

module.exports = Weakstone;
