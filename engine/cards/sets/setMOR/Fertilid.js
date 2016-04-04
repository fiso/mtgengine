"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FertilidBase = require("../setARC/Fertilid.js");

class Fertilid extends FertilidBase {
  constructor(game) {
    super(game, "Fertilid", "Morningtide", "MOR");
  }
}

module.exports = Fertilid;
