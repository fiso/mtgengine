"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatterskullGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Shatterskull Giant", "Zendikar", "ZEN");
  }
}

module.exports = ShatterskullGiant;
