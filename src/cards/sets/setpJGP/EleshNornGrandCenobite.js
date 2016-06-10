"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EleshNornGrandCenobite extends UnimplementedCard {
  constructor (game) {
    super(game, "Elesh Norn, Grand Cenobite", "Judge Gift Program", "pJGP");
  }
}

module.exports = EleshNornGrandCenobite;
