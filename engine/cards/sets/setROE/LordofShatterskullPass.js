"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LordofShatterskullPassBase = require("../setpLPA/LordofShatterskullPass.js");

class LordofShatterskullPass extends LordofShatterskullPassBase {
  constructor(game) {
    super(game, "Lord of Shatterskull Pass", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LordofShatterskullPass;
