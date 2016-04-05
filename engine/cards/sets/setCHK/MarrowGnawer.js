"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarrowGnawer extends UnimplementedCard {
  constructor(game) {
    super(game, "Marrow-Gnawer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MarrowGnawer;
