"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkBetrayal extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Betrayal", "Theros", "THS");
  }
}

module.exports = DarkBetrayal;
