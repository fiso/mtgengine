"use strict";
const Constants = require ("../../../Constants");
const AncestorsChosenBase = require("../setJUD/AncestorsChosen");

class AncestorsChosen extends AncestorsChosenBase {
  constructor(game) {
    super(game, "Ancestor's Chosen", "Tenth Edition", "10E");
  }
}

module.exports = AncestorsChosen;
