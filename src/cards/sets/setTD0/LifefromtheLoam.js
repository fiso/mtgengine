"use strict";
const Constants = require ("../../../Constants");
const LifefromtheLoamBase = require("../setMMA/LifefromtheLoam");

class LifefromtheLoam extends LifefromtheLoamBase {
  constructor (game) {
    super(game, "Life from the Loam", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = LifefromtheLoam;
