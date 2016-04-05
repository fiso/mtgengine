"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Titania extends UnimplementedCard {
  constructor(game) {
    super(game, "Titania", "Vanguard", "VAN");
  }
}

module.exports = Titania;
