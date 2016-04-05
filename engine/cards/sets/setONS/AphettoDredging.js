"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AphettoDredging extends UnimplementedCard {
  constructor(game) {
    super(game, "Aphetto Dredging", "Onslaught", "ONS");
  }
}

module.exports = AphettoDredging;
