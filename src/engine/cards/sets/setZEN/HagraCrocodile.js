"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HagraCrocodile extends UnimplementedCard {
  constructor (game) {
    super(game, "Hagra Crocodile", "Zendikar", "ZEN");
  }
}

module.exports = HagraCrocodile;
