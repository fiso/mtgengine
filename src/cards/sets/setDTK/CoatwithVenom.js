"use strict";
const Constants = require ("../../../Constants");
const CoatwithVenomBase = require("../setE02/CoatwithVenom");

class CoatwithVenom extends CoatwithVenomBase {
  constructor (game) {
    super(game, "Coat with Venom", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CoatwithVenom;
