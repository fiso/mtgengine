"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setCED/Clone");

class Clone extends CloneBase {
  constructor(game) {
    super(game, "Clone", "Magic 2011", "M11");
  }
}

module.exports = Clone;
