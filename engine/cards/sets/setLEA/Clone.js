"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloneBase = require("../setCED/Clone.js");

class Clone extends CloneBase {
  constructor(game) {
    super(game, "Clone", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Clone;
