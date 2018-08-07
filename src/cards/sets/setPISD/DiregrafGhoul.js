"use strict";
const Constants = require ("../../../Constants");
const DiregrafGhoulBase = require("../setM19/DiregrafGhoul");

class DiregrafGhoul extends DiregrafGhoulBase {
  constructor (game) {
    super(game, "Diregraf Ghoul", "Innistrad Promos", "PISD");
  }
}

module.exports = DiregrafGhoul;
