"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianFrostwaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Frostwaker", "Coldsnap", "CSP");
  }
}

module.exports = BalduvianFrostwaker;
