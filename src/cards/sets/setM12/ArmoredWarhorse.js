"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredWarhorse extends UnimplementedCard {
  constructor(game) {
    super(game, "Armored Warhorse", "Magic 2012", "M12");
  }
}

module.exports = ArmoredWarhorse;
