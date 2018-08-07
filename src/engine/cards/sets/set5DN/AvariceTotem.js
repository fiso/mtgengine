"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvariceTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Avarice Totem", "Fifth Dawn", "5DN");
  }
}

module.exports = AvariceTotem;
