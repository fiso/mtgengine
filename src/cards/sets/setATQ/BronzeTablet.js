"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BronzeTablet extends UnimplementedCard {
  constructor (game) {
    super(game, "Bronze Tablet", "Antiquities", "ATQ");
  }
}

module.exports = BronzeTablet;
