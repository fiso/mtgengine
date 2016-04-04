"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoyagingSatyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Voyaging Satyr", "Theros", "THS");
  }
}

module.exports = VoyagingSatyr;
