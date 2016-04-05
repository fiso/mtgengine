"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwirlingSpriggan extends UnimplementedCard {
  constructor(game) {
    super(game, "Swirling Spriggan", "Eventide", "EVE");
  }
}

module.exports = SwirlingSpriggan;
