"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkromasMemorial extends UnimplementedCard {
  constructor (game) {
    super(game, "Akroma's Memorial", "Magic 2013", "M13");
  }
}

module.exports = AkromasMemorial;
