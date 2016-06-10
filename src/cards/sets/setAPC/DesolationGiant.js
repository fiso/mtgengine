"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesolationGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Desolation Giant", "Apocalypse", "APC");
  }
}

module.exports = DesolationGiant;
