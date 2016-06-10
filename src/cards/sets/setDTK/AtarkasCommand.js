"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AtarkasCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Atarka's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AtarkasCommand;
