"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RestockBase = require("../setINV/Restock.js");

class Restock extends RestockBase {
  constructor(game) {
    super(game, "Restock", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Restock;
