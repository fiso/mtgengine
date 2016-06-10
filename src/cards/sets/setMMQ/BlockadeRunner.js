"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlockadeRunner extends UnimplementedCard {
  constructor (game) {
    super(game, "Blockade Runner", "Mercadian Masques", "MMQ");
  }
}

module.exports = BlockadeRunner;
