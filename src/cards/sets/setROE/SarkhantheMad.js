"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarkhantheMad extends UnimplementedCard {
  constructor (game) {
    super(game, "Sarkhan the Mad", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SarkhantheMad;
