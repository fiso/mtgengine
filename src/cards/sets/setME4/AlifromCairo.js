"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlifromCairo extends UnimplementedCard {
  constructor (game) {
    super(game, "Ali from Cairo", "Masters Edition IV", "ME4");
  }
}

module.exports = AlifromCairo;
