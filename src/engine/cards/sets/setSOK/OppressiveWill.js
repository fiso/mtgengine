"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OppressiveWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Oppressive Will", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OppressiveWill;
