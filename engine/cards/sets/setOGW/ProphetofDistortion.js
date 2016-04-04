"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProphetofDistortion extends UnimplementedCard {
  constructor(game) {
    super(game, "Prophet of Distortion", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ProphetofDistortion;
