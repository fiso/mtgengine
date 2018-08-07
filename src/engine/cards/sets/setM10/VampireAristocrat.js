"use strict";
const Constants = require ("../../../Constants");
const VampireAristocratBase = require("../setMM3/VampireAristocrat");

class VampireAristocrat extends VampireAristocratBase {
  constructor (game) {
    super(game, "Vampire Aristocrat", "Magic 2010", "M10");
  }
}

module.exports = VampireAristocrat;
