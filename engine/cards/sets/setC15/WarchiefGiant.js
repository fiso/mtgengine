"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarchiefGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Warchief Giant", "Commander 2015", "C15");
  }
}

module.exports = WarchiefGiant;
