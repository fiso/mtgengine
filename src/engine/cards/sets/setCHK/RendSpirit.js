"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RendSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Rend Spirit", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RendSpirit;
