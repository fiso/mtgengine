"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViselingBase = require("../setC13/Viseling.js");

class Viseling extends ViselingBase {
  constructor(game) {
    super(game, "Viseling", "Nemesis", "NMS");
  }
}

module.exports = Viseling;
