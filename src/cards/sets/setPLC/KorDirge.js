"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorDirge extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Dirge", "Planar Chaos", "PLC");
  }
}

module.exports = KorDirge;
