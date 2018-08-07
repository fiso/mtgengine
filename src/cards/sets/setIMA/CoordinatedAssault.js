"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoordinatedAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Coordinated Assault", "Iconic Masters", "IMA");
  }
}

module.exports = CoordinatedAssault;
