"use strict";
const Constants = require ("../../../Constants");
const DiregrafGhoulBase = require("../setM19/DiregrafGhoul");

class DiregrafGhoul extends DiregrafGhoulBase {
  constructor (game) {
    super(game, "Diregraf Ghoul", "Magic Online Promos", "PRM");
  }
}

module.exports = DiregrafGhoul;
