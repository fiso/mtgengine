"use strict";
const Constants = require ("../../../Constants");
const AnticipateBase = require("../setM19/Anticipate");

class Anticipate extends AnticipateBase {
  constructor (game) {
    super(game, "Anticipate", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Anticipate;
