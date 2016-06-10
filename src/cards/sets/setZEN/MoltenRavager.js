"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenRavager extends UnimplementedCard {
  constructor (game) {
    super(game, "Molten Ravager", "Zendikar", "ZEN");
  }
}

module.exports = MoltenRavager;
