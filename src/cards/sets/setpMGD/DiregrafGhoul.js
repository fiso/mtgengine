"use strict";
const Constants = require ("../../../Constants");
const DiregrafGhoulBase = require("../setDDQ/DiregrafGhoul");

class DiregrafGhoul extends DiregrafGhoulBase {
  constructor(game) {
    super(game, "Diregraf Ghoul", "Magic Game Day", "pMGD");
  }
}

module.exports = DiregrafGhoul;
