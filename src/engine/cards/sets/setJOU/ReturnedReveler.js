"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReturnedReveler extends UnimplementedCard {
  constructor (game) {
    super(game, "Returned Reveler", "Journey into Nyx", "JOU");
  }
}

module.exports = ReturnedReveler;
