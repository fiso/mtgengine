"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DancingScimitar extends UnimplementedCard {
  constructor(game) {
    super(game, "Dancing Scimitar", "Arabian Nights", "ARN");
  }
}

module.exports = DancingScimitar;
