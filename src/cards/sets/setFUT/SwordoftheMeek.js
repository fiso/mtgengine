"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordoftheMeek extends UnimplementedCard {
  constructor(game) {
    super(game, "Sword of the Meek", "Future Sight", "FUT");
  }
}

module.exports = SwordoftheMeek;
