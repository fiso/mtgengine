"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AminatousAugury extends UnimplementedCard {
  constructor (game) {
    super(game, "Aminatou's Augury", "Commander 2018", "C18");
  }
}

module.exports = AminatousAugury;
