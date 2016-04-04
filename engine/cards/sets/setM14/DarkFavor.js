"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkFavorBase = require("../setM12/DarkFavor.js");

class DarkFavor extends DarkFavorBase {
  constructor(game) {
    super(game, "Dark Favor", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DarkFavor;
