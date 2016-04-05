"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrassMan extends UnimplementedCard {
  constructor(game) {
    super(game, "Brass Man", "Arabian Nights", "ARN");
  }
}

module.exports = BrassMan;
