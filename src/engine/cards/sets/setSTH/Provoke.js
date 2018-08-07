"use strict";
const Constants = require ("../../../Constants");
const ProvokeBase = require("../setTPR/Provoke");

class Provoke extends ProvokeBase {
  constructor (game) {
    super(game, "Provoke", "Stronghold", "STH");
  }
}

module.exports = Provoke;
