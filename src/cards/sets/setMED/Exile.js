"use strict";
const Constants = require ("../../../Constants");
const ExileBase = require("../setALL/Exile");

class Exile extends ExileBase {
  constructor (game) {
    super(game, "Exile", "Masters Edition", "MED");
  }
}

module.exports = Exile;
