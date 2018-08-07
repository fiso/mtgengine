"use strict";
const Constants = require ("../../../Constants");
const DarkFavorBase = require("../setM14/DarkFavor");

class DarkFavor extends DarkFavorBase {
  constructor (game) {
    super(game, "Dark Favor", "Magic 2012", "M12");
  }
}

module.exports = DarkFavor;
