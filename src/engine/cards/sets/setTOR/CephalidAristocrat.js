"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidAristocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Aristocrat", "Torment", "TOR");
  }
}

module.exports = CephalidAristocrat;
