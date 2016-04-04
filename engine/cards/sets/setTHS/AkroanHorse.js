"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkroanHorse extends UnimplementedCard {
  constructor(game) {
    super(game, "Akroan Horse", "Theros", "THS");
  }
}

module.exports = AkroanHorse;
