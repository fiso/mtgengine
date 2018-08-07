"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Befuddle extends UnimplementedCard {
  constructor (game) {
    super(game, "Befuddle", "Core Set 2019", "M19");
  }
}

module.exports = Befuddle;
