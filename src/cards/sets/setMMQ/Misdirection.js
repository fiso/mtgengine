"use strict";
const Constants = require ("../../../Constants");
const MisdirectionBase = require("../setDDT/Misdirection");

class Misdirection extends MisdirectionBase {
  constructor (game) {
    super(game, "Misdirection", "Mercadian Masques", "MMQ");
  }
}

module.exports = Misdirection;
