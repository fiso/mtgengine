"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Arachnoid extends UnimplementedCard {
  constructor (game) {
    super(game, "Arachnoid", "Fifth Dawn", "5DN");
  }
}

module.exports = Arachnoid;
