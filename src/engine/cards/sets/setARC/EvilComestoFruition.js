"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvilComestoFruition extends UnimplementedCard {
  constructor (game) {
    super(game, "Evil Comes to Fruition", "Archenemy", "ARC");
  }
}

module.exports = EvilComestoFruition;
