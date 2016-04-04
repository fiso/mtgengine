"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasFactory extends UnimplementedCard {
  constructor(game) {
    super(game, "Mishra's Factory", "Antiquities", "ATQ");
  }
}

module.exports = MishrasFactory;
