"use strict";
const Constants = require ("../../../Constants");
const JustFateBase = require("../setME4/JustFate");

class JustFate extends JustFateBase {
  constructor (game) {
    super(game, "Just Fate", "Portal Second Age", "P02");
  }
}

module.exports = JustFate;
