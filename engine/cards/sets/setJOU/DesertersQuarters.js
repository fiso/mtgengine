"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertersQuarters extends UnimplementedCard {
  constructor(game) {
    super(game, "Deserter's Quarters", "Journey into Nyx", "JOU");
  }
}

module.exports = DesertersQuarters;
