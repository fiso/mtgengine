"use strict";
const Constants = require ("../../../Constants");
const HarborSerpentBase = require("../setM11/HarborSerpent");

class HarborSerpent extends HarborSerpentBase {
  constructor(game) {
    super(game, "Harbor Serpent", "Magic 2012", "M12");
  }
}

module.exports = HarborSerpent;
