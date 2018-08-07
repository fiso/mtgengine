"use strict";
const Constants = require ("../../../Constants");
const ProvokeBase = require("../setTPR/Provoke");

class Provoke extends ProvokeBase {
  constructor (game) {
    super(game, "Provoke", "Vintage Masters", "VMA");
  }
}

module.exports = Provoke;
