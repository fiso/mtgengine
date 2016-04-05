"use strict";
const Constants = require ("../../../Constants");
const SerraAvengerBase = require("../setpCMP/SerraAvenger");

class SerraAvenger extends SerraAvengerBase {
  constructor(game) {
    super(game, "Serra Avenger", "Magic 2013", "M13");
  }
}

module.exports = SerraAvenger;
