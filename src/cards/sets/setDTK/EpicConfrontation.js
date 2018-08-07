"use strict";
const Constants = require ("../../../Constants");
const EpicConfrontationBase = require("../setA25/EpicConfrontation");

class EpicConfrontation extends EpicConfrontationBase {
  constructor (game) {
    super(game, "Epic Confrontation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = EpicConfrontation;
