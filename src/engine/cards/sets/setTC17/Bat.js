"use strict";
const Constants = require ("../../../Constants");
const BatBase = require("../setTM19/Bat");

class Bat extends BatBase {
  constructor (game) {
    super(game, "Bat", "Commander 2017 Tokens", "TC17");
  }
}

module.exports = Bat;
