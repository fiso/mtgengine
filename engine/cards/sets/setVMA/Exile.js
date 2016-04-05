"use strict";
const Constants = require ("../../../Constants");
const ExileBase = require("../setALL/Exile");

class Exile extends ExileBase {
  constructor(game) {
    super(game, "Exile", "Vintage Masters", "VMA");
  }
}

module.exports = Exile;
