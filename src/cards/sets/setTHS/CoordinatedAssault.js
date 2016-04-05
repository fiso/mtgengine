"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoordinatedAssault extends UnimplementedCard {
  constructor(game) {
    super(game, "Coordinated Assault", "Theros", "THS");
  }
}

module.exports = CoordinatedAssault;
