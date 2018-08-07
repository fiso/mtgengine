"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Inner Fire", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InnerFire;
