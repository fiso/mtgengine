"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OblivionCrown extends UnimplementedCard {
  constructor(game) {
    super(game, "Oblivion Crown", "Future Sight", "FUT");
  }
}

module.exports = OblivionCrown;
