"use strict";
const Constants = require ("../../../Constants");
const CunningWishBase = require("../setG07/CunningWish");

class CunningWish extends CunningWishBase {
  constructor (game) {
    super(game, "Cunning Wish", "Magic Online Promos", "PRM");
  }
}

module.exports = CunningWish;
