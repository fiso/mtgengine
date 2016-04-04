"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorruptEunuchsBase = require("../setME3/CorruptEunuchs.js");

class CorruptEunuchs extends CorruptEunuchsBase {
  constructor(game) {
    super(game, "Corrupt Eunuchs", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CorruptEunuchs;
