"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OniPossession extends UnimplementedCard {
  constructor(game) {
    super(game, "Oni Possession", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OniPossession;
