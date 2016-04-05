"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathofaThousandStings extends UnimplementedCard {
  constructor(game) {
    super(game, "Death of a Thousand Stings", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DeathofaThousandStings;
