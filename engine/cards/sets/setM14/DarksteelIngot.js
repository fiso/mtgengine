"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelIngotBase = require("../setpARL/DarksteelIngot.js");

class DarksteelIngot extends DarksteelIngotBase {
  constructor(game) {
    super(game, "Darksteel Ingot", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DarksteelIngot;
