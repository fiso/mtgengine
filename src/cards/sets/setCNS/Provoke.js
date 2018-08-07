"use strict";
const Constants = require ("../../../Constants");
const ProvokeBase = require("../setTPR/Provoke");

class Provoke extends ProvokeBase {
  constructor (game) {
    super(game, "Provoke", "Conspiracy", "CNS");
  }
}

module.exports = Provoke;
