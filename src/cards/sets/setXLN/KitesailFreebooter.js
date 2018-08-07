"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitesailFreebooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Kitesail Freebooter", "Ixalan", "XLN");
  }
}

module.exports = KitesailFreebooter;
