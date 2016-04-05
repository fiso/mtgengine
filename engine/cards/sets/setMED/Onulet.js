"use strict";
const Constants = require ("../../../Constants");
const OnuletBase = require("../setATQ/Onulet");

class Onulet extends OnuletBase {
  constructor(game) {
    super(game, "Onulet", "Masters Edition", "MED");
  }
}

module.exports = Onulet;
