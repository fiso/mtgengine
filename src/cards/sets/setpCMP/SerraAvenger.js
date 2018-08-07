"use strict";
const Constants = require ("../../../Constants");
const SerraAvengerBase = require("../setM13/SerraAvenger");

class SerraAvenger extends SerraAvengerBase {
  constructor (game) {
    super(game, "Serra Avenger", "Champs and States", "PCMP");
  }
}

module.exports = SerraAvenger;
