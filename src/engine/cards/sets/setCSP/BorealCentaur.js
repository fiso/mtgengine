"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorealCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Boreal Centaur", "Coldsnap", "CSP");
  }
}

module.exports = BorealCentaur;
