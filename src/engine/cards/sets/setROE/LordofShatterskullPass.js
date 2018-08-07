"use strict";
const Constants = require ("../../../Constants");
const LordofShatterskullPassBase = require("../setPROE/LordofShatterskullPass");

class LordofShatterskullPass extends LordofShatterskullPassBase {
  constructor (game) {
    super(game, "Lord of Shatterskull Pass", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LordofShatterskullPass;
