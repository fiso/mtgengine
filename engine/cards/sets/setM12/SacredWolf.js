"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SacredWolfBase = require("../setM11/SacredWolf.js");

class SacredWolf extends SacredWolfBase {
  constructor(game) {
    super(game, "Sacred Wolf", "Magic 2012", "M12");
  }
}

module.exports = SacredWolf;
