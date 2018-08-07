"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaticCore extends UnimplementedCard {
  constructor (game) {
    super(game, "Magmatic Core", "Coldsnap", "CSP");
  }
}

module.exports = MagmaticCore;
