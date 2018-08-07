"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesolationGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Desolation Giant", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DesolationGiant;
