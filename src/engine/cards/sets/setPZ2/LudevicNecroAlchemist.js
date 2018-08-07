"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LudevicNecroAlchemist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ludevic, Necro-Alchemist", "You Make the Cube", "PZ2");
  }
}

module.exports = LudevicNecroAlchemist;
