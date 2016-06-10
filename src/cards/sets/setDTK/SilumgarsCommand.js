"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilumgarsCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Silumgar's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SilumgarsCommand;
