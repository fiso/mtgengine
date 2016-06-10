"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorealShelf extends UnimplementedCard {
  constructor (game) {
    super(game, "Boreal Shelf", "Coldsnap", "CSP");
  }
}

module.exports = BorealShelf;
