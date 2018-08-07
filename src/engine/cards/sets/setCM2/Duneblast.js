"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duneblast extends UnimplementedCard {
  constructor (game) {
    super(game, "Duneblast", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Duneblast;
