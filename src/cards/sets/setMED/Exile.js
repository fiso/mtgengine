"use strict";
const Constants = require ("../../../Constants");
const ExileBase = require("../setVMA/Exile");

class Exile extends ExileBase {
  constructor (game) {
    super(game, "Exile", "Masters Edition", "MED");
  }
}

module.exports = Exile;
