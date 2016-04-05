"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JumboImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Jumbo Imp", "Unglued", "UGL");
  }
}

module.exports = JumboImp;
