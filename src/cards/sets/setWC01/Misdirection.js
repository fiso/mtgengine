"use strict";
const Constants = require ("../../../Constants");
const MisdirectionBase = require("../setDDT/Misdirection");

class Misdirection extends MisdirectionBase {
  constructor (game) {
    super(game, "Misdirection", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Misdirection;
