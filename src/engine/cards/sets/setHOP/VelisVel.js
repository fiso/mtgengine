"use strict";
const Constants = require ("../../../Constants");
const VelisVelBase = require("../setPCA/VelisVel");

class VelisVel extends VelisVelBase {
  constructor (game) {
    super(game, "Velis Vel", "Planechase", "HOP");
  }
}

module.exports = VelisVel;
