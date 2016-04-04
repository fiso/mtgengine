"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OldManoftheSea extends UnimplementedCard {
  constructor(game) {
    super(game, "Old Man of the Sea", "Arabian Nights", "ARN");
  }
}

module.exports = OldManoftheSea;
