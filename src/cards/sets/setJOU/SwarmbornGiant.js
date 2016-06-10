"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwarmbornGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Swarmborn Giant", "Journey into Nyx", "JOU");
  }
}

module.exports = SwarmbornGiant;
