"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GracefulAdept extends UnimplementedCard {
  constructor(game) {
    super(game, "Graceful Adept", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GracefulAdept;
