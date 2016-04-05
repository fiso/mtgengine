"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhisperingSpecter extends UnimplementedCard {
  constructor(game) {
    super(game, "Whispering Specter", "New Phyrexia", "NPH");
  }
}

module.exports = WhisperingSpecter;
