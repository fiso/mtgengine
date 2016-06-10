"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PolisCrusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Polis Crusher", "Theros", "THS");
  }
}

module.exports = PolisCrusher;
