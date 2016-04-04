"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacquesleVertBase = require("../setLEG/JacquesleVert.js");

class JacquesleVert extends JacquesleVertBase {
  constructor(game) {
    super(game, "Jacques le Vert", "Masters Edition", "MED");
  }
}

module.exports = JacquesleVert;
