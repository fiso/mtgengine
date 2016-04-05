"use strict";
const Constants = require ("../../../Constants");
const GofortheThroatBase = require("../setpFNM/GofortheThroat");

class GofortheThroat extends GofortheThroatBase {
  constructor(game) {
    super(game, "Go for the Throat", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GofortheThroat;
