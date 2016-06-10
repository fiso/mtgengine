"use strict";
const Constants = require ("../../../Constants");
const IsolatedChapelBase = require("../setISD/IsolatedChapel");

class IsolatedChapel extends IsolatedChapelBase {
  constructor (game) {
    super(game, "Isolated Chapel", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = IsolatedChapel;
