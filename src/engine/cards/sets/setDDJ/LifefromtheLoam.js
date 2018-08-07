"use strict";
const Constants = require ("../../../Constants");
const LifefromtheLoamBase = require("../setMMA/LifefromtheLoam");

class LifefromtheLoam extends LifefromtheLoamBase {
  constructor (game) {
    super(game, "Life from the Loam", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = LifefromtheLoam;
