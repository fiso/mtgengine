"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WuSpy extends Card {
  constructor(game) {
    super(game, "Wu Spy", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuSpy;
