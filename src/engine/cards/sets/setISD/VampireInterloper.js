"use strict";
const Constants = require ("../../../Constants");
const VampireInterloperBase = require("../setE02/VampireInterloper");

class VampireInterloper extends VampireInterloperBase {
  constructor (game) {
    super(game, "Vampire Interloper", "Innistrad", "ISD");
  }
}

module.exports = VampireInterloper;
