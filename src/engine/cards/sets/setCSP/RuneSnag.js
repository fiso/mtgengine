"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuneSnag extends UnimplementedCard {
  constructor (game) {
    super(game, "Rune Snag", "Coldsnap", "CSP");
  }
}

module.exports = RuneSnag;
