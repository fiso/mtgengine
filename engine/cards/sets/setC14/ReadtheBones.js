"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReadtheBones extends Card {
  constructor(game) {
    super(game, "Read the Bones", "Commander 2014", "C14");
  }
}

module.exports = ReadtheBones;
