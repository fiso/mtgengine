"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProphetofDistortion extends Card {
  constructor(game) {
    super(game, "Prophet of Distortion", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ProphetofDistortion;
