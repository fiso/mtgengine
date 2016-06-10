"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tyrranax extends UnimplementedCard {
  constructor (game) {
    super(game, "Tyrranax", "Fifth Dawn", "5DN");
  }
}

module.exports = Tyrranax;
