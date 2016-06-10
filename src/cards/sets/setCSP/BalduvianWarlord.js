"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianWarlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Warlord", "Coldsnap", "CSP");
  }
}

module.exports = BalduvianWarlord;
