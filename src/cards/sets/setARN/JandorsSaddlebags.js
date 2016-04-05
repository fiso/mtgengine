"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JandorsSaddlebags extends UnimplementedCard {
  constructor(game) {
    super(game, "Jandor's Saddlebags", "Arabian Nights", "ARN");
  }
}

module.exports = JandorsSaddlebags;
