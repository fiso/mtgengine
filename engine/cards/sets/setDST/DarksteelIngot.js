"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelIngotBase = require("../setpARL/DarksteelIngot.js");

class DarksteelIngot extends DarksteelIngotBase {
  constructor(game) {
    super(game, "Darksteel Ingot", "Darksteel", "DST");
  }
}

module.exports = DarksteelIngot;
