"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesolationTwin extends UnimplementedCard {
  constructor(game) {
    super(game, "Desolation Twin", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DesolationTwin;
