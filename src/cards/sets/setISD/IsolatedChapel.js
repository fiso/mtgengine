"use strict";
const Constants = require ("../../../Constants");
const IsolatedChapelBase = require("../setDOM/IsolatedChapel");

class IsolatedChapel extends IsolatedChapelBase {
  constructor (game) {
    super(game, "Isolated Chapel", "Innistrad", "ISD");
  }
}

module.exports = IsolatedChapel;
