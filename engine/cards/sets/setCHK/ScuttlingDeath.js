"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScuttlingDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Scuttling Death", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ScuttlingDeath;
