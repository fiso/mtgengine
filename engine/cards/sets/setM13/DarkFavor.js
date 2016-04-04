"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkFavorBase = require("../setM12/DarkFavor.js");

class DarkFavor extends DarkFavorBase {
  constructor(game) {
    super(game, "Dark Favor", "Magic 2013", "M13");
  }
}

module.exports = DarkFavor;
