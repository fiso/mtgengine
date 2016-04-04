"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DruidicSatchelBase = require("../setC13/DruidicSatchel.js");

class DruidicSatchel extends DruidicSatchelBase {
  constructor(game) {
    super(game, "Druidic Satchel", "Magic 2012", "M12");
  }
}

module.exports = DruidicSatchel;
