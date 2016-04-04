"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelGarrison extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Garrison", "Future Sight", "FUT");
  }
}

module.exports = DarksteelGarrison;
