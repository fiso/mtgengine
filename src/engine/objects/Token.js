"use strict";
const MTGObject = require("./MTGObject");
const Constants = require ("../Constants");

class Token extends MTGObject {
  constructor (game) {
    super(game);
  }
}

module.exports = Token;
