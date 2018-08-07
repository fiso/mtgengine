"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WandoftheElements extends UnimplementedCard {
  constructor (game) {
    super(game, "Wand of the Elements", "Darksteel", "DST");
  }
}

module.exports = WandoftheElements;
