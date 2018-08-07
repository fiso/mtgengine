"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Detonate extends UnimplementedCard {
  constructor (game) {
    super(game, "Detonate", "Masters Edition IV", "ME4");
  }
}

module.exports = Detonate;
