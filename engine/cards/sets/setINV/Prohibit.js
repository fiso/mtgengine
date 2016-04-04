"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProhibitBase = require("../setDDM/Prohibit.js");

class Prohibit extends ProhibitBase {
  constructor(game) {
    super(game, "Prohibit", "Invasion", "INV");
  }
}

module.exports = Prohibit;
