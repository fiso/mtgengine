"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MalfegorBase = require("../setCON/Malfegor.js");

class Malfegor extends MalfegorBase {
  constructor(game) {
    super(game, "Malfegor", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Malfegor;
