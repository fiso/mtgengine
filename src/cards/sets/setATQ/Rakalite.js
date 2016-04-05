"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rakalite extends UnimplementedCard {
  constructor(game) {
    super(game, "Rakalite", "Antiquities", "ATQ");
  }
}

module.exports = Rakalite;
