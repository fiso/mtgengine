"use strict";
const Constants = require ("../../../Constants");
const CloneBase = require("../setM14/Clone");

class Clone extends CloneBase {
  constructor (game) {
    super(game, "Clone", "Unlimited Edition", "2ED");
  }
}

module.exports = Clone;
