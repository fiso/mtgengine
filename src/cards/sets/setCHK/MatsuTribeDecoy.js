"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MatsuTribeDecoy extends UnimplementedCard {
  constructor (game) {
    super(game, "Matsu-Tribe Decoy", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MatsuTribeDecoy;
