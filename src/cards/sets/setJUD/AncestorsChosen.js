"use strict";
const Constants = require ("../../../Constants");
const AncestorsChosenBase = require("../set10E/AncestorsChosen");

class AncestorsChosen extends AncestorsChosenBase {
  constructor (game) {
    super(game, "Ancestor's Chosen", "Judgment", "JUD");
  }
}

module.exports = AncestorsChosen;
