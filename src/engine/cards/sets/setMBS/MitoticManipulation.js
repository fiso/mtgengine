"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MitoticManipulation extends UnimplementedCard {
  constructor (game) {
    super(game, "Mitotic Manipulation", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MitoticManipulation;
