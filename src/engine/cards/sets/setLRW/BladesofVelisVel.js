"use strict";
const Constants = require ("../../../Constants");
const BladesofVelisVelBase = require("../setMM2/BladesofVelisVel");

class BladesofVelisVel extends BladesofVelisVelBase {
  constructor (game) {
    super(game, "Blades of Velis Vel", "Lorwyn", "LRW");
  }
}

module.exports = BladesofVelisVel;
