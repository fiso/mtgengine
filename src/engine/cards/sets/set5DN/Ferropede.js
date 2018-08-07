"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ferropede extends UnimplementedCard {
  constructor (game) {
    super(game, "Ferropede", "Fifth Dawn", "5DN");
  }
}

module.exports = Ferropede;
