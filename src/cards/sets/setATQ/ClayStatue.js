"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClayStatue extends UnimplementedCard {
  constructor (game) {
    super(game, "Clay Statue", "Antiquities", "ATQ");
  }
}

module.exports = ClayStatue;
