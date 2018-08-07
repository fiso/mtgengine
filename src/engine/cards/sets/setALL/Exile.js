"use strict";
const Constants = require ("../../../Constants");
const ExileBase = require("../setVMA/Exile");

class Exile extends ExileBase {
  constructor (game) {
    super(game, "Exile", "Alliances", "ALL");
  }
}

module.exports = Exile;
