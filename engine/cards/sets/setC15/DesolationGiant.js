"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesolationGiantBase = require("../setAPC/DesolationGiant.js");

class DesolationGiant extends DesolationGiantBase {
  constructor(game) {
    super(game, "Desolation Giant", "Commander 2015", "C15");
  }
}

module.exports = DesolationGiant;
