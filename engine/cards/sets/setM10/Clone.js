"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setCED/Clone");

class Clone extends CloneBase {
  constructor(game) {
    super(game, "Clone", "Magic 2010", "M10");
  }
}

module.exports = Clone;
