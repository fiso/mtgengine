"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KalastriaHealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Kalastria Healer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KalastriaHealer;
