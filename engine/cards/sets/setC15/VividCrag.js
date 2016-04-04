"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividCragBase = require("../setC13/VividCrag.js");

class VividCrag extends VividCragBase {
  constructor(game) {
    super(game, "Vivid Crag", "Commander 2015", "C15");
  }
}

module.exports = VividCrag;
