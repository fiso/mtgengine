"use strict";
const Constants = require ("../../../Constants");
const EnvelopBase = require("../setWC03/Envelop");

class Envelop extends EnvelopBase {
  constructor (game) {
    super(game, "Envelop", "Judgment", "JUD");
  }
}

module.exports = Envelop;
