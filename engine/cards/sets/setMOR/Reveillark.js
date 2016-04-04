"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReveillarkBase = require("../setMMA/Reveillark.js");

class Reveillark extends ReveillarkBase {
  constructor(game) {
    super(game, "Reveillark", "Morningtide", "MOR");
  }
}

module.exports = Reveillark;
