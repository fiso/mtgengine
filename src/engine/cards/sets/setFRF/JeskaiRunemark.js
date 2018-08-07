"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiRunemark extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeskai Runemark", "Fate Reforged", "FRF");
  }
}

module.exports = JeskaiRunemark;
