"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmrakultheAeonsTornBase = require("../setMM2/EmrakultheAeonsTorn.js");

class EmrakultheAeonsTorn extends EmrakultheAeonsTornBase {
  constructor(game) {
    super(game, "Emrakul, the Aeons Torn", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EmrakultheAeonsTorn;
