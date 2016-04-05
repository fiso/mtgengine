"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KolaghansCommand extends UnimplementedCard {
  constructor(game) {
    super(game, "Kolaghan's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghansCommand;
