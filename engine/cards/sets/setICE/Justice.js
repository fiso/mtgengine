"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JusticeBase = require("../set5ED/Justice.js");

class Justice extends JusticeBase {
  constructor(game) {
    super(game, "Justice", "Ice Age", "ICE");
  }
}

module.exports = Justice;
