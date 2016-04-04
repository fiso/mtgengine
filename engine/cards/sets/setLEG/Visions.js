"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VisionsBase = require("../set4ED/Visions.js");

class Visions extends VisionsBase {
  constructor(game) {
    super(game, "Visions", "Legends", "LEG");
  }
}

module.exports = Visions;
