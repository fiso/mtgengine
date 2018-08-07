"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonFangs extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Fangs", "Scourge", "SCG");
  }
}

module.exports = DragonFangs;
