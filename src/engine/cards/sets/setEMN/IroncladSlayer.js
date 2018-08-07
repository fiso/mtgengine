"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IroncladSlayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ironclad Slayer", "Eldritch Moon", "EMN");
  }
}

module.exports = IroncladSlayer;
