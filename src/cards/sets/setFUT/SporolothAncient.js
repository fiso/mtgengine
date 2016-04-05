"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SporolothAncient extends UnimplementedCard {
  constructor(game) {
    super(game, "Sporoloth Ancient", "Future Sight", "FUT");
  }
}

module.exports = SporolothAncient;
