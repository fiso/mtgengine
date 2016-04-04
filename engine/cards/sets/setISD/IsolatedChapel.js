"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IsolatedChapel extends Card {
  constructor(game) {
    super(game, "Isolated Chapel", "Innistrad", "ISD");
  }
}

module.exports = IsolatedChapel;
