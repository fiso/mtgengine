"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArashitheSkyAsunder extends UnimplementedCard {
  constructor(game) {
    super(game, "Arashi, the Sky Asunder", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ArashitheSkyAsunder;
