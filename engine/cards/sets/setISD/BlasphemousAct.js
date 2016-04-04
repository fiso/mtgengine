"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlasphemousActBase = require("../setC14/BlasphemousAct.js");

class BlasphemousAct extends BlasphemousActBase {
  constructor(game) {
    super(game, "Blasphemous Act", "Innistrad", "ISD");
  }
}

module.exports = BlasphemousAct;
