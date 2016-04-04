"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KurosTaken extends UnimplementedCard {
  constructor(game) {
    super(game, "Kuro's Taken", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KurosTaken;
