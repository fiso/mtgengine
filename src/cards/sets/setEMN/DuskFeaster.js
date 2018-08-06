"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskFeaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Dusk Feaster", "Eldritch Moon", "EMN");
  }
}

module.exports = DuskFeaster;
