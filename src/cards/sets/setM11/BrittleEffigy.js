"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrittleEffigy extends UnimplementedCard {
  constructor (game) {
    super(game, "Brittle Effigy", "Magic 2011", "M11");
  }
}

module.exports = BrittleEffigy;
