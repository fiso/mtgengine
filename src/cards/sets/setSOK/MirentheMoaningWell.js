"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirentheMoaningWell extends UnimplementedCard {
  constructor (game) {
    super(game, "Miren, the Moaning Well", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MirentheMoaningWell;
