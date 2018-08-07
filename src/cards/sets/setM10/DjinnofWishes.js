"use strict";
const Constants = require ("../../../Constants");
const DjinnofWishesBase = require("../setC18/DjinnofWishes");

class DjinnofWishes extends DjinnofWishesBase {
  constructor (game) {
    super(game, "Djinn of Wishes", "Magic 2010", "M10");
  }
}

module.exports = DjinnofWishes;
