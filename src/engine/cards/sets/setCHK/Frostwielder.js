"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Frostwielder extends UnimplementedCard {
  constructor (game) {
    super(game, "Frostwielder", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Frostwielder;
