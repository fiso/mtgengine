"use strict";
const Constants = require ("../../../Constants");
const UmezawasJitteBase = require("../setV16/UmezawasJitte");

class UmezawasJitte extends UmezawasJitteBase {
  constructor (game) {
    super(game, "Umezawa's Jitte", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = UmezawasJitte;
