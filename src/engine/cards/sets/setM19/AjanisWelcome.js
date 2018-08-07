"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjanisWelcome extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani's Welcome", "Core Set 2019", "M19");
  }
}

module.exports = AjanisWelcome;
