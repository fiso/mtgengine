"use strict";
const Constants = require ("../../../Constants");
const OnuletBase = require("../setME4/Onulet");

class Onulet extends OnuletBase {
  constructor (game) {
    super(game, "Onulet", "Masters Edition", "MED");
  }
}

module.exports = Onulet;
