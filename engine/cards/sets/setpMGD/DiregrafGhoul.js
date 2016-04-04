"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiregrafGhoulBase = require("../setDDQ/DiregrafGhoul.js");

class DiregrafGhoul extends DiregrafGhoulBase {
  constructor(game) {
    super(game, "Diregraf Ghoul", "Magic Game Day", "pMGD");
  }
}

module.exports = DiregrafGhoul;
