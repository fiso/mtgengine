"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EphemeronBase = require("../setEXO/Ephemeron.js");

class Ephemeron extends EphemeronBase {
  constructor(game) {
    super(game, "Ephemeron", "Tempest Remastered", "TPR");
  }
}

module.exports = Ephemeron;
