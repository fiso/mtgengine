"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarchiefGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Warchief Giant", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = WarchiefGiant;
