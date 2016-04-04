"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DjinnofWishesBase = require("../setM10/DjinnofWishes.js");

class DjinnofWishes extends DjinnofWishesBase {
  constructor(game) {
    super(game, "Djinn of Wishes", "Magic 2012", "M12");
  }
}

module.exports = DjinnofWishes;
