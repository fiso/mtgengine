"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsychatogBase = require("../setpMPR/Psychatog.js");

class Psychatog extends PsychatogBase {
  constructor(game) {
    super(game, "Psychatog", "Odyssey", "ODY");
  }
}

module.exports = Psychatog;
