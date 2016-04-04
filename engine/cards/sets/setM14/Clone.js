"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setCED/Clone");

class Clone extends CloneBase {
  constructor(game) {
    super(game, "Clone", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Clone;
