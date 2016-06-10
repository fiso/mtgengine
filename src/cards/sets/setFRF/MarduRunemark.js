"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduRunemark extends UnimplementedCard {
  constructor (game) {
    super(game, "Mardu Runemark", "Fate Reforged", "FRF");
  }
}

module.exports = MarduRunemark;
