"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KolaghansCommand extends Card {
  constructor(game) {
    super(game, "Kolaghan's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghansCommand;
