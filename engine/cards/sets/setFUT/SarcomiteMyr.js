"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarcomiteMyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Sarcomite Myr", "Future Sight", "FUT");
  }
}

module.exports = SarcomiteMyr;
