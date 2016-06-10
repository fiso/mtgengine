"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setCED/Clone");

class Clone extends CloneBase {
  constructor (game) {
    super(game, "Clone", "Tenth Edition", "10E");
  }
}

module.exports = Clone;
