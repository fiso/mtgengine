"use strict";
const Constants = require ("../../../Constants");
const AbattoirGhoulBase = require("../setDDQ/AbattoirGhoul");

class AbattoirGhoul extends AbattoirGhoulBase {
  constructor(game) {
    super(game, "Abattoir Ghoul", "Innistrad", "ISD");
  }
}

module.exports = AbattoirGhoul;
