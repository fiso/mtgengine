"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloneBase = require("../setCED/Clone.js");

class Clone extends CloneBase {
  constructor(game) {
    super(game, "Clone", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Clone;
