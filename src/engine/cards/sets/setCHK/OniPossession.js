"use strict";
const Constants = require ("../../../Constants");
const OniPossessionBase = require("../setDVD/OniPossession");

class OniPossession extends OniPossessionBase {
  constructor (game) {
    super(game, "Oni Possession", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OniPossession;
