"use strict";
const Constants = require ("../../../Constants");
const IsolatedChapelBase = require("../setDOM/IsolatedChapel");

class IsolatedChapel extends IsolatedChapelBase {
  constructor (game) {
    super(game, "Isolated Chapel", "Dominaria Promos", "PDOM");
  }
}

module.exports = IsolatedChapel;
