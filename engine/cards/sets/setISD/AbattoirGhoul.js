"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbattoirGhoulBase = require("../setDDQ/AbattoirGhoul.js");

class AbattoirGhoul extends AbattoirGhoulBase {
  constructor(game) {
    super(game, "Abattoir Ghoul", "Innistrad", "ISD");
  }
}

module.exports = AbattoirGhoul;
