"use strict";
const Constants = require ("../../../Constants");
const ExileBase = require("../setALL/Exile");

class Exile extends ExileBase {
  constructor (game) {
    super(game, "Exile", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Exile;
