"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrofFrost extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr of Frost", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofFrost;
