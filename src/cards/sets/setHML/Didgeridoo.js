"use strict";
const Constants = require ("../../../Constants");
const DidgeridooBase = require("../setME3/Didgeridoo");

class Didgeridoo extends DidgeridooBase {
  constructor (game) {
    super(game, "Didgeridoo", "Homelands", "HML");
  }
}

module.exports = Didgeridoo;
