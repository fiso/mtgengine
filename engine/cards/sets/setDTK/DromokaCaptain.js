"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromokaCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Dromoka Captain", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokaCaptain;
