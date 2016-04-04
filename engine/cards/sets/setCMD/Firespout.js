"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FirespoutBase = require("../setV14/Firespout.js");

class Firespout extends FirespoutBase {
  constructor(game) {
    super(game, "Firespout", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Firespout;
