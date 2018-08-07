"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dwindle extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwindle", "Core Set 2019", "M19");
  }
}

module.exports = Dwindle;
