"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScourgeServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Scourge Servant", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ScourgeServant;
