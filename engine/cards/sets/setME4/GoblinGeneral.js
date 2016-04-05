"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGeneral extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin General", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinGeneral;
