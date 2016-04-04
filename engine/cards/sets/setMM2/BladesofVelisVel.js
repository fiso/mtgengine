"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BladesofVelisVelBase = require("../setLRW/BladesofVelisVel.js");

class BladesofVelisVel extends BladesofVelisVelBase {
  constructor(game) {
    super(game, "Blades of Velis Vel", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BladesofVelisVel;
