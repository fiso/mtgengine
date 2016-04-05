"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClamIAm extends UnimplementedCard {
  constructor(game) {
    super(game, "Clam-I-Am", "Unglued", "UGL");
  }
}

module.exports = ClamIAm;
