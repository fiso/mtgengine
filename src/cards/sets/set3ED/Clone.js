"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setCED/Clone");

class Clone extends CloneBase {
  constructor (game) {
    super(game, "Clone", "Revised Edition", "3ED");
  }
}

module.exports = Clone;
