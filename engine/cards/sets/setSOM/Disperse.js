"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisperseBase = require("../setM14/Disperse.js");

class Disperse extends DisperseBase {
  constructor(game) {
    super(game, "Disperse", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Disperse;
