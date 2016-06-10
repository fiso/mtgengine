"use strict";
const Constants = require ("../../../Constants");
const OnuletBase = require("../setATQ/Onulet");

class Onulet extends OnuletBase {
  constructor (game) {
    super(game, "Onulet", "Revised Edition", "3ED");
  }
}

module.exports = Onulet;
