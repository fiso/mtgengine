"use strict";
const Constants = require ("../../../Constants");
const CoralEelBase = require("../set9ED/CoralEel");

class CoralEel extends CoralEelBase {
  constructor (game) {
    super(game, "Coral Eel", "Portal", "POR");
  }
}

module.exports = CoralEel;
