"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarjhanBase = require("../setHML/Marjhan.js");

class Marjhan extends MarjhanBase {
  constructor(game) {
    super(game, "Marjhan", "Masters Edition II", "ME2");
  }
}

module.exports = Marjhan;
