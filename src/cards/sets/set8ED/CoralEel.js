"use strict";
const Constants = require ("../../../Constants");
const CoralEelBase = require("../set9ED/CoralEel");

class CoralEel extends CoralEelBase {
  constructor (game) {
    super(game, "Coral Eel", "Eighth Edition", "8ED");
  }
}

module.exports = CoralEel;
