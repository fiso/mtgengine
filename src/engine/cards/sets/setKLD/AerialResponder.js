"use strict";
const Constants = require ("../../../Constants");
const AerialResponderBase = require("../setE01/AerialResponder");

class AerialResponder extends AerialResponderBase {
  constructor (game) {
    super(game, "Aerial Responder", "Kaladesh", "KLD");
  }
}

module.exports = AerialResponder;
