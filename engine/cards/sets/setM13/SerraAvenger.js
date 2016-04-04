"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerraAvengerBase = require("../setpCMP/SerraAvenger.js");

class SerraAvenger extends SerraAvengerBase {
  constructor(game) {
    super(game, "Serra Avenger", "Magic 2013", "M13");
  }
}

module.exports = SerraAvenger;
