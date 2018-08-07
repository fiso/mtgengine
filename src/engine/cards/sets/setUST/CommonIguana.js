"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommonIguana extends UnimplementedCard {
  constructor (game) {
    super(game, "Common Iguana", "Unstable", "UST");
  }
}

module.exports = CommonIguana;
