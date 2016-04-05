"use strict";
const Constants = require ("../../../Constants");
const WingsofVelisVelBase = require("../setLRW/WingsofVelisVel");

class WingsofVelisVel extends WingsofVelisVelBase {
  constructor(game) {
    super(game, "Wings of Velis Vel", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WingsofVelisVel;
