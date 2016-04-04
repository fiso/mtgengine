"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManrikiGusari extends UnimplementedCard {
  constructor(game) {
    super(game, "Manriki-Gusari", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ManrikiGusari;
