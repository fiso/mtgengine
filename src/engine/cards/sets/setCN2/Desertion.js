"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Desertion extends UnimplementedCard {
  constructor (game) {
    super(game, "Desertion", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Desertion;
