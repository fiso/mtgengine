"use strict";
const Constants = require ("../../../Constants");
const NorwoodArchersBase = require("../setS99/NorwoodArchers");

class NorwoodArchers extends NorwoodArchersBase {
  constructor (game) {
    super(game, "Norwood Archers", "Portal Second Age", "P02");
  }
}

module.exports = NorwoodArchers;
