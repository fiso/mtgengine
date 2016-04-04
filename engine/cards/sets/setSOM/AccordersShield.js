"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AccordersShieldBase = require("../setM14/AccordersShield.js");

class AccordersShield extends AccordersShieldBase {
  constructor(game) {
    super(game, "Accorder's Shield", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AccordersShield;
