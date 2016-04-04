"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FangrenMarauder extends UnimplementedCard {
  constructor(game) {
    super(game, "Fangren Marauder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FangrenMarauder;
