"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptolithFragment extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptolith Fragment", "Eldritch Moon", "EMN");
  }
}

module.exports = CryptolithFragment;
